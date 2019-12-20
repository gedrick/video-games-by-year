const req = require('request');
const cheerio = require('cheerio');

function processResults(tableIndexes, mapping, body) {
  const $ = cheerio.load(body);
  const tables = $('.sortable');

  let rowCells;
  let results = [];
  let nextResult;
  let currentProperty;
  let finalValue;

  tableIndexes.forEach(tableIndex => {
    // Loop over each row in the table.
    $(tables[tableIndex])
      .find('tbody tr')
      .each((index, tableRow) => {
        rowCells = $(tableRow).find('td');

        const props = Object.keys(mapping);
        let shortCircuited = false;
        nextResult = {};

        props.forEach(propName => {
          currentProperty = mapping[propName];

          // If it's simply pointing to an index, grab it.
          if (Number.isInteger(currentProperty)) {
            finalValue = $(rowCells[currentProperty]).text();
          } else {
            // Check the failFn if it exists. If the test passes, short circuit the row.
            if (
              currentProperty.failFn &&
              typeof currentProperty.failFn === 'function'
            ) {
              if (
                currentProperty.failFn($, $(rowCells[currentProperty.index]))
              ) {
                shortCircuited = true;
              }
            }

            // Otherwise, run the callback on the index.
            if (
              currentProperty.callbackFn &&
              typeof currentProperty.callbackFn === 'function'
            ) {
              finalValue = currentProperty.callbackFn(
                $,
                $(rowCells[currentProperty.index])
              );
            } else {
              finalValue = $(rowCells[currentProperty.index]).text();
            }
          }

          nextResult[propName] = finalValue;
        });

        if (!shortCircuited) {
          results.push(nextResult);
        }
      });
  });

  return results;
}

function scrape(config) {
  const url = `https://en.wikipedia.org/wiki/${config.page}`;
  return new Promise((resolve, reject) => {
    req.get({ url }, (err, resp, body) => {
      if (resp.statusCode === 404) {
        reject(`Error: wiki page \`${config.page}\` does not exist!`);
      } else if (err) {
        reject(`Error with Wikipedia request: ${err}`);
      } else {
        const results = processResults(
          config.tableIndexes,
          config.mapping,
          body
        );
        resolve(results);
      }
    });
  });
}

module.exports = {
  scrape
};
