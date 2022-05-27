/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');

module.exports = {
  watch: true,
  devtool: 'eval-cheap-source-map',
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'leaflet-convertcoords.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
