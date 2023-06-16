// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    //the default __dirname that webpack spits out is 'dist', however, this can be configured to be anything. In this case, 'build'.
    path: path.resolve(__dirname, "build"),
    // the default file name that webpack spits out is main.js, however, this can be configured. In this case, 'bundle.js'.
    filename: "[contenthash]bundle.js",
  },
  plugins: [
    // Takes care of cleaning up old assets, leaving only the most relevant assets
    new CleanWebpackPlugin(),
  ],
});
