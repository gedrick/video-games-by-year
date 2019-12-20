const scrape = require('./scrape');
const filters = require('./filters');

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
const wikiPage = 'List_of_Super_Nintendo_Entertainment_System_games';
const tableIndexes = [0];
const config = {
  page: wikiPage,
  mapping,
  tableIndexes
};
scrape
  .scrape(config)
  .then(results => {
    // console.log('got scrape results:', results);
  })
  .catch(err => {
    console.log(err);
  });
