const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    //the default __dirname that webpack spits out is 'dist', however, this can be configured to be anything. In this case, 'build'.
    path: path.resolve(__dirname, "build"),
    // the default file name that webpack spits out is main.js, however, this can be configured. In this case, 'bundle.js'.
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [
    // Takes care of cleaning up old assets, leaving only the relevant assets
    new CleanWebpackPlugin(),
  ],
});
