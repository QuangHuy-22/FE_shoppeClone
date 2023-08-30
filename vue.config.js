const axios = require('axios');

module.exports = {
  devServer: {
    before(app) {
      app.use((req, res, next) => {
        const username = 'admin';
        const password = 'admin';
        const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
        req.headers.authorization = authHeader;
        next();
      });
    },
    proxy: {
      '/api': {
        target: process.env.API_URL || 'http://localhost:8080',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
