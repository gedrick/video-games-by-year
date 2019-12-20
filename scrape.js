const req = require('request');
const cheerio = require('cheerio');
const filters = require('./filters');
const url =
  'https://en.wikipedia.org/wiki/List_of_Super_Nintendo_Entertainment_System_games';

const tablesToGrab = [0];
const mapping = {
  title: {
    index: 0,
    callbackFn: filters.TrimText
  },
  developer: {
    index: 1,
    callbackFn: filters.TrimText
  },
  publisher: {
    index: 2,
    callbackFn: filters.TrimText
  },
  year: {
    index: 4,
    callbackFn: ($, obj) => {
      const str = $(obj).text();
      if (str.includes(',')) {
        const year = str.split(',')[1];
        return parseInt(year.trim());
      } else if (str.includes(' ')) {
        return parseInt(str.split(' ')[1]);
      }

      return null;
    },
    failFn: ($, obj) => {
      return (
        $(obj)
          .text()
          .trim() === 'Unreleased'
      );
    }
  },
  month: {
    index: 4,
    callbackFn: ($, obj) => {
      const str = $(obj).text();
      if (str.includes(',')) {
        const dayMonth = str.split(',')[0];
        return dayMonth.split(' ')[0];
      } else {
        return null;
      }
    }
  },
  day: {
    index: 4,
    callbackFn: ($, obj) => {
      const str = $(obj).text();
      if (str.includes(',')) {
        const dayMonth = str.split(',')[0];
        return parseInt(dayMonth.split(' ')[1].trim());
      } else {
        return null;
      }
    }
  }
};

function processResults(body) {
  const $ = cheerio.load(body);
  const tables = $('.sortable');

  let rowCells;
  let results = [];
  let nextResult;
  let currentProperty;
  let finalValue;

  tablesToGrab.forEach(tableIndex => {
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

    console.log(results);
  });
}

req.get({ url }, (err, resp, body) => {
  processResults(body);
});
