/* eslint-disable no-console, prefer-arrow-callback */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.development.config';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  // Because webpack is creating the html file we need to
  // locate it and then send it.
  const file = path.join(compiler.outputPath, 'index.html');

  compiler.outputFileSystem.readFile(file, (error, result) => {
    if (error) {
      return console.log(error);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    const url = `http://localhost:${ port }`;
    open(url);
  }
});
