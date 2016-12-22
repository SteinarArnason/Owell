/* eslint-disable no-console, no-process-env */
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.production.config';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified prod version...'.blue);

webpack(webpackConfig).run((webpackError, stats) => {
  if (webpackError) {
    console.log(colors.red.bold(webpackError));
    return 1;
  }

  const statsResult = stats.toString({
    hash: true,
    version: true,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: false,
    publicPath: false
  });

  console.log(`${ statsResult }`);
  console.log(`For more detailed webpack output tweak the options for 'statsResult' in ${ path.join(__dirname, 'build.js') }`);

  console.log(colors.green('\nCompiled!'));

  return 0;
});
