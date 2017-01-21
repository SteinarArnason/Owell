import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssVariables from 'postcss-css-variables';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  target: 'web',

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loader: 'babel' },
      { test: /\.(png|gif)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000' },
    ],
  },

  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [ 'src', 'node_modules' ],
    extensions: [ '', '.js', '.jsx', '.css' ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Application Title',
      template: path.join(__dirname, 'src/index.ejs'),
      filename: 'index.html',
      inject: false,
    }),
  ],

  postcss: [
    postcssImport({ path: 'src' }),
    postcssVariables,
    autoprefixer,
  ],

};
