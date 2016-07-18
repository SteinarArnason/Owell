import webpack from 'webpack';

module.exports = require('./webpack.make.config.js')({
  development: true,
  type: 'development',
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
