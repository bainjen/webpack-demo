// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
