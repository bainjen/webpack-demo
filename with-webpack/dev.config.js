const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // this rule makes main.js easier to read in development mode
  devtool: false,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
  },
  module: {
    // Rules can dictate what to do when encountering a file that ends in a specific extension
    rules: [
      {
        //test: if the file ends in this extension...
        test: /\.(css|scss)$/,
        // use: use the loader provided
        use: [
          "style-loader", // 3. inject styles into the dom
          "css-loader", // 2. Turn css into commonjs
          "sass-loader", // 1. turn sass into css
        ], // this order matters
      },
    ],
  },
});
