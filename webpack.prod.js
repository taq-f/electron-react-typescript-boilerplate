const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common.js");

module.exports = [
  merge(common, {
    mode: "production",
    target: 'electron-main',
    devtool: "source-map",
    entry: { main: './src/main.ts' },
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
    ],
  }),
  merge(common, {
    mode: "production",
    target: 'electron-renderer',
    devtool: "source-map",
    entry: { renderer: './src/renderer.tsx' },
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new HtmlWebpackPlugin({
        template: "./src/html/index.html",
      }),
    ],
  }),
];
