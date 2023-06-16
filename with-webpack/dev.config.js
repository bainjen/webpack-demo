const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // this rule makes main.js easier to read in development mode
  devtool: false,
  devServer: {
    port: 3000,
  },
});
