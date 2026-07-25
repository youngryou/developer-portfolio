module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'npm',
      args: 'start -- -p 3000',
      env: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
}
