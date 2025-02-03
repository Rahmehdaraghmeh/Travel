const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "inline-source-map",
  stats: "verbose",
  output: {
    path: path.resolve(__dirname, "dist"), // ✅ إضافة output.path
    filename: "bundle.js",
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // ✅ تصحيح خطأ regex
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
     
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), 
    },
    compress: true,
    hot:false,
    open:true,
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
