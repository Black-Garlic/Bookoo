const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/aws",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      pathRewrite: {
        "^/aws": "",
      },
    })
  );
};
