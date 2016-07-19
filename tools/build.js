/* eslint-disable no-console, no-process-env */
import webpack from 'webpack';
// import webpackConfig from '../webpack.config.prod';
import webpackConfig from '../webpack.production.config';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified prod version...'.blue);

webpack(webpackConfig).run((webpackError, stats) => {
  if (webpackError) {
    console.log(colors.red.bold(webpackError));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => { return console.log(error.erd); });
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map((warning) => { return console.log(warning.yellow); });
  }

  console.log(`Webpack stats: ${ stats }`);

  console.log(colors.green('Compiled!'));

  return 0;
});
