module.exports = {
  apps: [
    {
      name: 'tg-fruit-bot-server',
      script: 'index.js',
      instances: process.env.PM2_INSTANCES || 1,
    },
  ],
};
