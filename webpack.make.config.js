/* eslint-disable object-shorthand */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = function(options) {

  const GLOBALS = {
    __DEV__: options.development,
    'process.env.NODE_ENV': JSON.stringify(options.type)
  };

  const devEntry = [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './src/index'
  ];
  const productionEntry = './src/index';

  const output = {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  };

  options.plugins.push(new webpack.DefinePlugin(GLOBALS));

  let module = {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: [ 'babel' ] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  };

  if (options.development) {
    module.loaders.push(
      { test: /(\.css)$/, loaders: [ 'style', 'css' ] }
    );
  } else {
    options.plugins.push(new ExtractTextPlugin('styles.css'));
    module.loaders.push(
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
    );
  }

  return {
    debug: options.debug,
    devtool: options.devtool,
    noInfo: options.noInfo,
    entry: options.development ? devEntry : productionEntry,
    target: 'web',
    output: output,
    devServer: options.development ? './src' : './dist',
    plugins: options.plugins,
    module: module,
    resolve: {
      modulesDirectories: [ 'node_modules', 'src' ],
      extensions: [ '', '.js', '.jsx', '.css' ]
    }
  };
};
