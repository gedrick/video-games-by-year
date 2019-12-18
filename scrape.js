const req = require('request');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Super_Nintendo_Entertainment_System_games';

const tablesToGrab = [0];
const mapping = {
  title: {
    index: 0,
    callbackFn: str => str.trim()
  },
  developer: {
    index: 1,
    callbackFn: str => str.trim()
  },
  year: {
    index: 4,
    callbackFn: getYear
  },
  month: {
    index: 4,
    callbackFn: str => {
      if (str.includes(',')) {
        const dayMonth = str.split(',')[0];
        return dayMonth.split(' ')[0];
      } else {
        return null;
      }
    }
  }
}

function getYear(string) {
  if (string && string.includes(',')) {
    const year = string.split(',')[1];
    return parseInt(year.trim());
  } else if (string.trim() === 'Unreleased') {
    return null;
  }

  return null;
}

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
    $(tables[tableIndex]).find('tbody tr').each((index, tableRow) => {
      rowCells = $(tableRow).find('td');

      const props = Object.keys(mapping);

      nextResult = {};

      props.forEach(propName => {
        currentProperty = mapping[propName];

        // If it's simply pointing to an index, grab it.
        if (Number.isInteger(currentProperty)) {
          finalValue = $(rowCells[currentProperty]).text();
        } else {
          // Otherwise, run the callback on the index.
          if (currentProperty.callbackFn && typeof currentProperty.callbackFn === 'function') {
            finalValue = currentProperty.callbackFn($(rowCells[currentProperty.index]).text());
          } else {
            finalValue = $(rowCells[currentProperty.index]).text();
          }
        }

        nextResult[propName] = finalValue;
      });

      results.push(nextResult);
    })

    console.log(results);
  })
}

req.get({url}, (err, resp, body) => {
  processResults(body);
});
