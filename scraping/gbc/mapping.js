const moment = require('moment')

module.exports = {
  title: {
    index: 0,
    callbackFn: ($, obj) => {
      let title;
      let links = $(obj).find('a');

      if (links.length) {
        title = $(links[0]).text();
      } else {
        title = $(obj).text();
      }
      if (!title) {
        return null;
      }
      return title;
    },
    failFn: ($, obj) => {
      return $(obj).text().includes('Title');
    }
  },
  naRelease: {
    index: 7,
    failFn: ($, obj) => {
      if ($(obj).html().includes('Dark_Red')) {
        return true;
      }
      return false;
    }
  },
  url: {
    index: 0,
    callbackFn: ($, obj) => {
      let href = null;
      let links = $(obj).find('a');

      if (links.length) {
        href = $(links[0]).attr('href');
      }

      if (href && !href.includes('/wiki')) {
        return null;
      }

      return href;
    }
  },
  year: {
    index: 5,
    callbackFn: ($, obj) => {
      const str = $(obj).text();
      if (str.includes(',')) {
        const year = str.split(',')[1];
        return parseInt(year.trim());
      } else if (str.includes(' ')) {
        return parseInt(str.split(' ')[1]);
      } else if (!Number.isNaN(str)) {
        return Number(str.trim());
      } else {
        return null;
      }
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
    index: 5,
    callbackFn: ($, obj) => {
      const str = $(obj).text();
      let month, monthNumeric
      if (str.includes(',')) {
        const dayMonth = str.split(',')[0];
        month = dayMonth.split(' ')[0];
        monthNumeric = moment().month(month).format('M')
        return Number(monthNumeric);
      } else if (str.trim().includes(' ')) {
        const monthName = str.split(' ')[0]
        return Number(moment().month(monthName).format('M'))
      } else {
        return null;
      }
    }
  },
  day: {
    index: 5,
    callbackFn: ($, obj) => {
      const str = $(obj).text().replace(/\(.*\)/, '');
      if (str.includes(',')) {
        const dayMonth = str.split(',')[0];
        return parseInt(dayMonth.split(' ')[1].trim());
      } else {
        return null;
      }
    }
  },
  systems: {
    callbackFn: () => {
      return ['GBC']
    }
  }
};
