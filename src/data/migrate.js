const games = require('./snes.json');
const fs = require('fs')

games.forEach(game => {
  console.log(game);
  const year = game.year;
  if (fs.existsSync(`./${year}.js`)) {
    const dataFile = fs.readFileSync(`./${year}.js`)
    const dataJson
  }
})