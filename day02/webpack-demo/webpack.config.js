const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MyPlugin = require("./src/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.md$/i,
        loader: path.resolve(__dirname, "./src/loader-cjs.js"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    new MyPlugin(),
  ],
};
