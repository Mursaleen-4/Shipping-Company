module.exports = {
    apps: [
        {
            name: 'shipping-app',
            script: './server/dist/index.js',
            cwd: './',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env_production: {
                NODE_ENV: 'production',
                PORT: 5000,
            },
        },
    ],
};
