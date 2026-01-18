const { getChannel } = require('./connection');
const config = require('../config');
const emailController = require('../controllers/email.controller');

let messageBuffer = [];
let batchTimer = null;

const startConsumer = async () => {
    const channel = getChannel();
    const queue = config.rabbitmq.queue;

    console.log(`Starting consumer on queue: ${queue}`);

    channel.consume(
        queue,
        (msg) => {
            if (msg !== null) {
                messageBuffer.push(msg);
                checkBatch();
            }
        },
        { noAck: false },
    );
};

const checkBatch = () => {
    const batchSize = config.rabbitmq.batchSize;

    // If batch is full, process immediately
    if (messageBuffer.length >= batchSize) {
        processBatch();
    }
    // If timer not running, start it
    else if (!batchTimer) {
        batchTimer = setTimeout(() => {
            processBatch();
        }, config.rabbitmq.batchTimeout);
    }
};

const processBatch = async () => {
    // Clear timer if it triggered this
    if (batchTimer) {
        clearTimeout(batchTimer);
        batchTimer = null;
    }

    if (messageBuffer.length === 0) return;

    // Swap buffer to process while new messages accumulate
    const currentBatch = [...messageBuffer];
    messageBuffer = [];

    console.log(`Processing batch of ${currentBatch.length} messages`);

    // Process concurrently but wait for all to handle ACKs/NACKs
    const promises = currentBatch.map(async (msg) => {
        const channel = getChannel();
        let content;

        try {
            content = JSON.parse(msg.content.toString());
        } catch (e) {
            console.error('Failed to parse message JSON, routing to DLQ', e);
            // Malformed JSON -> DLQ immediately
            channel.nack(msg, false, false); // requeue=false -> goes to DLQ/Dead Letter Exchange if set, or dropped.
            // Since we don't have DLX set up on the queue automatically in this code (user said "Route to DLQ"),
            // we must manually publish to DLQ and ACK original.
            sendToDLQ(msg, 'JSON Parse Error');
            channel.ack(msg);
            return;
        }

        try {
            await emailController.processMessage(content);
            channel.ack(msg);
        } catch (error) {
            console.log(error, 'error');
            // console.error(
            //     `Failed to process message ID ${content.meta?.requestId}:`,
            //     error.message,
            // );
            handleFailure(msg, content, error);
        }
    });

    await Promise.all(promises);
};

const handleFailure = (msg, content, error) => {
    const channel = getChannel();
    const headers = msg.properties.headers || {};
    let retryCount = headers['x-retry-count'] || 0;

    if (retryCount < config.rabbitmq.maxRetries) {
        retryCount++;
        console.log(`Retrying message (Attempt ${retryCount}/${config.rabbitmq.maxRetries})`);

        // Republish to ORIGINAL queue for retry with updated count
        // NOTE: This puts it at the back of the queue.
        channel.sendToQueue(config.rabbitmq.queue, msg.content, {
            ...msg.properties,
            headers: {
                ...headers,
                'x-retry-count': retryCount,
                'x-last-error': error.message,
            },
        });

        channel.ack(msg); // Ack original so it's removed
    } else {
        console.error(`Max retries reached for message. Routing to DLQ.`);
        sendToDLQ(msg, error.message);
        channel.ack(msg);
    }
};

const sendToDLQ = (msg, reason) => {
    const channel = getChannel();
    const headers = msg.properties.headers || {};

    channel.sendToQueue(config.rabbitmq.dlq, msg.content, {
        ...msg.properties,
        headers: {
            ...headers,
            'x-dlq-reason': reason,
            'x-failed-at': new Date().toISOString(),
        },
    });
};

module.exports = {
    startConsumer,
};
