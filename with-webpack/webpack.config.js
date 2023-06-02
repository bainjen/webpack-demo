// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // this rule makes main.js easier to read in development mode
  devtool: false,
  entry: "./src/newIndex.js",
  output: {
    //the default __dirname that webpack spits out is 'dist', however, this can be configured to be anything. In this case, 'build'.
    path: path.resolve(__dirname, "build"),
    // the default file name that webpack spits out is main.js, however, this can be configured. In this case, 'bundle.js'.
    filename: "[contenthash]bundle.js",
  },
  // Plugins add an extra layer of functionality to webpack to make it more configurable
  // https://webpack.js.org/plugins/
  plugins: [
    // Allows specification for the template where we want the script to be injected
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Takes care of cleaning up old assets, leaving only the most relevant assets
    new CleanWebpackPlugin(),
  ],
};
