/* eslint-disable no-console, prefer-arrow-callback */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    const url = `http://localhost:${ port }`;
    open(url);
  }
});
