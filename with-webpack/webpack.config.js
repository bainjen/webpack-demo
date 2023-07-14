// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// DEFAULT SCAFFOLDING
module.exports = {
  //entry: "./src/App1/newIndex.js",
  entry: {
    app1: "./src/App1/newIndex.js",
    app2: "./src/App2/secondIndex.js",
    app3: "./src/App3/thirdIndex.js",
    vendor: "./src/vendor.js",
  },
  // Plugins add an extra layer of functionality to webpack to make it more configurable https://webpack.js.org/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // module holds loaders
  module: {
    // Rules can dictate what to do when encountering a file that ends in a specific extension
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        resolve: { extensions: [".js", ".jsx"] },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
