const games = require('./snes.json');
const fs = require('fs')

const overwrite = true;
let totals = {
  overwritten: 0,
  new: 0,
  skipped: 0
}

games.forEach(game => {
  const year = game.year;
  const gameName = game.title;
  game.systems = ['SNES']
  console.log(`Migrating ${game.title}`);

  if (!fs.existsSync(`./${year}.json`)) {
    fs.writeFileSync(`./${year}.json`, '[]')
  }

  const dataFile = fs.readFileSync(`./${year}.json`, { encoding: 'utf8' });
  let dataJson = JSON.parse(dataFile);


  matchExists = false;
  dataJson.forEach(gameObject => {
    if (gameObject.title === gameName) {
      matchExists = true;
    }
  })

  if (!matchExists) {
    dataJson.push(game);
    fs.writeFileSync(`./${year}.json`, JSON.stringify(dataJson, null, 2));
    console.log('\Game added to file.');
    totals.new++;
  } else if (matchExists && overwrite) {
    dataJson = dataJson.filter(gameObject => gameObject.title !== gameName);
    dataJson.push(game);
    fs.writeFileSync(`./${year}.json`, JSON.stringify(dataJson, null, 2));
    console.log('\Game entry updated.');
    totals.overwritten++;
  } else {
    console.log('\tGame already exists!');
    totals.skipped++;
  }
})

console.log('------------------------------------------');
console.log('-----------------TOTALS-------------------');
console.log('------------------------------------------');

console.log(`TOTAL GAMES:\t\t\t${games.length}`);
console.log(`NEW GAMES:\t\t\t${totals.new}`);
console.log(`OVERWRITTEN:\t\t\t${totals.overwritten}`);
console.log(`SKIPPED:\t\t\t${totals.skipped}`);


