// Path is a build in node module that comes with Node.js
// It enables developers to create file paths independent of the platform
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// COMMENTED OUT CODE IS NO LONGER REQUIRED IN THIS CONFIG
// THE CODE STAYS SO I CAN COMMENT WHY IT CAN GO AWAY

// the cleaning is now handled by webpack dev server
//const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// DEFAULT SCAFFOLDING
module.exports = {
  // mode and devtool  will be set in the specific config files since it is not a commonly shared rule
  // mode: "development",
  // // this rule makes main.js easier to read in development mode
  // devtool: false,

  entry: "./src/newIndex.js",

  // devServer is for development only
  // devServer: {
  //   port: 3000
  // },

  // Output is no longer necessary because the build directory gets loaded into memory during dev mode and there's nothing in it anymore
  // Output only needs to be specified in production
  // output: {
  //   //the default __dirname that webpack spits out is 'dist', however, this can be configured to be anything. In this case, 'build'.
  //   path: path.resolve(__dirname, "build"),
  //   // the default file name that webpack spits out is main.js, however, this can be configured. In this case, 'bundle.js'.
  //   filename: "[contenthash]bundle.js",
  // },
  // Plugins add an extra layer of functionality to webpack to make it more configurable
  // https://webpack.js.org/plugins/
  plugins: [
    // Allows specification for the template where we want the script to be injected
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Cleanup is no longer a common need
    // Takes care of cleaning up old assets, leaving only the most relevant assets
    // new CleanWebpackPlugin(),
  ],
  // module holds loaders
  module: {
    // Rules can dictate what to do when encountering a file that ends in a specific extension
    rules: [
      {
        //test: if the file ends in this extension...
        test: /\.(css|scss)$/,
        // use: use the loader provided
        use: ["style-loader", "css-loader", "sass-loader"], // this order matters
      },
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
