const games = [];

const correctedGames = []

games.forEach(game => {
  correctedGames.push({
    title: game.title,
    year: game.year,
    month: game.month,
    day: game.day,
    url: game.url,
    systems: ['Sega Saturn']
  })
})

const fs = require('fs')
fs.writeFileSync('systemName.json', JSON.stringify(correctedGames, null, 2))