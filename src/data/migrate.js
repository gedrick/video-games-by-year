const games = require('./ps1-2.json');
const fs = require('fs')

let totals = {
  overwritten: 0,
  updated: 0,
  new: 0,
  skipped: 0
}

const overwrite = false;
const dryRun = true;

function writeFile(fileName, data, force = false) {
  if (!dryRun || force) {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  }
}

games.forEach(game => {
  const year = game.year;
  const gameName = game.title;
  // console.log(`Migrating ${game.title}`);

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
    writeFile(`./${year}.json`, dataJson);
    // console.log('\tGame added to file.');
    totals.new++;
  } else if (matchExists && overwrite) {
    dataJson = dataJson.filter(gameObject => gameObject.title !== gameName);
    dataJson.push(game);
    writeFile(`./${year}.json`, dataJson);
    console.log('\tGame entry overwritten.');
    totals.overwritten++;
  } else {
    const matchedGame = dataJson.find(gameObject => gameObject.title === gameName);

    let gameWasUpdated = false;
    // console.log(game.systems);
    if (game.year === matchedGame.year &&
      game.month === matchedGame.month &&
      game.day === matchedGame.day) {

      // Both releases went out on the same day. Just add the new system.
      game.systems.forEach(system => {

        if (!matchedGame.systems.includes(system)) {
          // console.log('Does not exist, adding ' + system);

          matchedGame.systems.push(system);
          // console.log(matchedGame.systems);
          gameWasUpdated = true;
        }
      });

      if (gameWasUpdated) {
        // Remove the old, re-add the new.
        dataJson = dataJson.filter(gameObject => gameObject.title !== gameName);
        dataJson.push(matchedGame);
        writeFile(`./${year}.json`, dataJson);
        console.log(`${game.title}\tGame record was updated`);
        totals.updated++;
      } else {
        totals.skipped++;
      }
    } else {
      dataJson.push(game);
      writeFile(`./${year}.json`, dataJson);
      totals.new++;
    }
  }
})

console.log('------------------------------------------');
console.log('-----------------TOTALS-------------------');
console.log('------------------------------------------');

console.log(`TOTAL GAMES:\t\t\t${games.length}`);
console.log(`NEW GAMES:\t\t\t${totals.new}`);
console.log(`OVERWRITTEN:\t\t\t${totals.overwritten}`);
console.log(`UPDATED:\t\t\t${totals.updated}`);
console.log(`SKIPPED:\t\t\t${totals.skipped}`);


