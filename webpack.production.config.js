import webpack from 'webpack';

module.exports = require('./webpack.make.config.js')({
  type: 'production',
  debug: true, // false ?
  devtool: 'source-map',
  noInfo: false, // true ?
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
