module.exports = {
    apps: [
        {
            name: 'notification-service',
            script: 'app.js',
            exec_mode: 'fork',
            instances: 1,
            autorestart: false,
            max_memory_restart: '1G',
            watch: [],
            env: {},
            env_production: {},
        },
    ],
};
