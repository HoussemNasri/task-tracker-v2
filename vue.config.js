module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/task-tracker-v2/" : "/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
