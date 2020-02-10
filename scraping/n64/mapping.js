const filters = require('./filters');

module.exports = {
  title: {
    index: 0,
    callbackFn: filters.getTitle,
    failFn: ($, obj) => {
      return $(obj).text().includes('Title');
    }
  },
  url: {
    index: 0,
    callbackFn: filters.getUrl
  },
  year: {
    index: 2,
    callbackFn: filters.extractYear,
    failFn: ($, obj) => {
      return (
        $(obj)
          .text()
          .trim() === ''
      );
    }
  },
  month: {
    index: 2,
    callbackFn: filters.extractMonth
  },
  day: {
    index: 2,
    callbackFn: filters.extractDay
  },
  systems: {
    callbackFn: () => {
      return ['Nintendo 64']
    }
  }
};
