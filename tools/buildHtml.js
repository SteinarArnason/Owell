/* eslint-disable no-console, prefer-arrow-callback */
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (readError, markup) => {
  if (readError) {
    return console.log(readError);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css" />');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(writeError) {
    if (writeError) {
      return console.log(writeError);
    }
    console.log(colors.green('index.html written to /dist'));
  });
});
