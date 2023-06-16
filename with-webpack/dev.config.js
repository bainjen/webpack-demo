// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // this rule makes main.js easier to read in development mode
  devtool: false,
  devServer: {
    port: 3000,
  },
  // build folder is now empty because in development,
  // the development server loads the application into memory, so nothing gets exposed
  // for that reason, this config doesn't need all of the same things as the production config
  // and can therefore be simplified
});
