import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.base.config';

const GLOBALS = {
  __DEV__: true,
  'process.env.NODE_ENV': JSON.stringify('development'),
};

const cssLoader = 'css-loader?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss-loader';

export default webpackMerge(baseConfig, {

  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,

  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // reloads the page if hmr fails
    './src/index'
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'style-loader', cssLoader ] },
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
