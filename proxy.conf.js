const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://v2i23zq7.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;