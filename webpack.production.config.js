import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig from './webpack.base.config';

const GLOBALS = {
  __DEV__: false,
  'process.env.NODE_ENV': JSON.stringify('production'),
};

const cssLoader = 'css-loader?modules&localIdentName=[hash:base64:5]!postcss-loader';

export default webpackMerge(baseConfig, {

  debug: false,
  devtool: 'source-map',
  noInfo: true,

  entry: './src/index',

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', cssLoader) },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
      },
    }),
    new webpack.DefinePlugin(GLOBALS),
  ],

});
