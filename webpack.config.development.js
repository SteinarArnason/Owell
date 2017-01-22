import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

const GLOBALS = {
  __DEV__: true,
  'process.env.NODE_ENV': JSON.stringify('development'),
};

export default webpackMerge(baseConfig, {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // reloads the page if hmr fails
    './src/index'
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]_[local]__[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
  ],

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

});