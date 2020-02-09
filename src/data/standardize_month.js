const year = 1997;
let monthData = require(`./${year}.json`);
const fs = require('fs')
const moment = require('moment')


monthData = monthData.map(gameObject => {
  const month = gameObject.month;
  let newMonth;
  if (typeof month === 'string') {
    newMonth = moment().month(month).format("M");
    gameObject.month = parseInt(newMonth);
  }

  console.log('updated month:', gameObject);


  return gameObject;
})

fs.writeFileSync(`./${year}.json`, JSON.stringify(monthData, null, 2))