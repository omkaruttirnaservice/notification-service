const amqp = require('amqplib');
const config = require('../config');

let connection = null;
let channel = null;

const connect = async () => {
    try {
        console.log('Connecting to RabbitMQ at', config.rabbitmq.url);
        connection = await amqp.connect(config.rabbitmq.url);

        connection.on('error', (err) => {
            console.error('RabbitMQ connection error:', err);
            // Optional: Logic to reconnect or exit
        });

        connection.on('close', () => {
            console.warn('RabbitMQ connection closed');
        });

        channel = await connection.createChannel();

        // Assert Queues to ensure they exist
        await channel.assertQueue(config.rabbitmq.queue, { durable: true });
        await channel.assertQueue(config.rabbitmq.dlq, { durable: true });

        // Set prefetch to control rate
        await channel.prefetch(config.rabbitmq.prefetch);

        console.log('RabbitMQ Connected and Channel Created');
        return { connection, channel };
    } catch (error) {
        console.error('Failed to connect to RabbitMQ:', error);
        process.exit(1); // Fatal error for this service
    }
};

const getChannel = () => {
    if (!channel) {
        throw new Error('RabbitMQ channel not initialized');
    }
    return channel;
};

const close = async () => {
    try {
        if (channel) await channel.close();
        if (connection) await connection.close();
        console.log('RabbitMQ Connection Closed Gracefully');
    } catch (err) {
        console.error('Error closing RabbitMQ connection:', err);
    }
};

module.exports = {
    connect,
    getChannel,
    close,
};
