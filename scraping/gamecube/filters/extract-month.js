const moment = require('moment')

module.exports = function ($, obj) {
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
};
