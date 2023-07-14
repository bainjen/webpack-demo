const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    //the default __dirname that webpack spits out is 'dist', however, this can be configured to be anything. In this case, 'build'.
    path: path.resolve(__dirname, "build"),
    // the default file name that webpack spits out is main.js, however, this can be configured. In this case, 'bundle.js'.
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {
    // Terser is the default minimizer for JS in webpack. It is used automatically, but gets overwritten by OptimizeCssAssetsPlugin
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    // Takes care of cleaning up old assets, leaving only the relevant assets
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    // Rules can dictate what to do when encountering a file that ends in a specific extension
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files // This plugin is extracting all css into one file that is put in the head of the index.html. It can be configured to make more than one file.
          "css-loader", // 2. Turn css into commonjs
          "sass-loader", // 1. turn sass into css
        ], // this order matters
      },
    ],
  },
});
