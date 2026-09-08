module.exports = {
  apps: [
    {
      name: 'growsin-3000',
      script: 'npm',
      args: 'run start',
      cwd: '/root/growsin',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork'
    },
    {
      name: 'growsin-3001',
      script: 'npm',
      args: 'run start',
      cwd: '/root/growsin',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      exec_mode: 'fork'
    }
  ]
};
