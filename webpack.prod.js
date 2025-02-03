const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"), // ✅ إضافة output.path
    filename: "bundle.js",
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // ✅ تصحيح regex
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html",
      title: "Progressive Web Application",
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
