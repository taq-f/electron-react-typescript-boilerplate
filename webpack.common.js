const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          emitErrors: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
  },
  node: {
    __dirname: false,
  },
}
