require('dotenv').config();
const express = require('express');
const rabbitConnection = require('./rabbit/connection');
const consumer = require('./rabbit/consumer');
const config = require('./config');

const app = express();
const port = config.app.port;

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'Email Service' });
});

// Start Service
const start = async () => {
    try {
        // 1. Connect to RabbitMQ
        await rabbitConnection.connect();

        // 2. Start Consumer
        await consumer.startConsumer();

        // 3. Start Express Server (for Health checks)
        const server = app.listen(port, () => {
            console.log(`Email Service running on port ${port}`);
        });

        // Graceful Shutdown
        const shutdown = async () => {
            console.log('Shutting down Email Service...');
            server.close(() => {
                console.log('HTTP server closed.');
            });
            await rabbitConnection.close();
            process.exit(0);
        };

        process.on('SIGTERM', shutdown);
        process.on('SIGINT', shutdown);
    } catch (error) {
        console.error('Failed to start Email Service:', error);
        process.exit(1);
    }
};

start();
