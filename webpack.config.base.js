import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssVariables from 'postcss-css-variables';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { LoaderOptionsPlugin } from 'webpack';

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
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
    extensions: [ '.js', '.jsx', '.css' ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Application Title',
      template: path.join(__dirname, 'src/index.ejs'),
      filename: 'index.html',
      inject: false,
    }),
    new LoaderOptionsPlugin({
      options: {
        postcss: [
          postcssImport({ path: 'src' }),
          postcssVariables,
          autoprefixer,
        ]
      }
    }),
  ],
  //
  // postcss: [
  //   postcssImport({ path: 'src' }),
  //   postcssVariables,
  //   autoprefixer,
  // ],

};
