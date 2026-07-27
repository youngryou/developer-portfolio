module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: './node_modules/next/dist/bin/next',
      args: 'start -- -p 3000',
      env_file: '.env',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
}
