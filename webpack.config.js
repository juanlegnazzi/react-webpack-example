const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    assetModuleFilename: "public/[name][ext]",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css", ".scss"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "tsconfig.json",
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTSCheckerWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    static: "./",
  },
};
