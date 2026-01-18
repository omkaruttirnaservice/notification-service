require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3001,
        env: process.env.NODE_ENV || 'development',
    },
    rabbitmq: {
        url: process.env.RABBITMQ_URL || 'amqp://localhost',
        queue: 'email.queue',
        dlq: 'email.queue.dlq',
        prefetch: 50, // Match batch size
        batchSize: 50,
        batchTimeout: 2500, // 2.5 seconds
        maxRetries: 3,
    },
    zeptomail: {
        url: 'https://api.zeptomail.in/v1.1/email', // Verify region (in vs com) usually .in or .com
        token: process.env.ZOHO_API_KEY,
        senderEmail: process.env.DEFAULT_SENDER_EMAIL || 'support@example.com',
        senderName: process.env.DEFAULT_SENDER_NAME || 'Support',
    },
};
