module.exports = function ($, obj) {
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
};
