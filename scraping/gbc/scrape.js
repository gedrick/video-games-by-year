const scraper = require('wikipedia-table-scraper');
const mapping = require('./mapping');
const wikiPage = 'List_of_Game_Boy_Color_games';
const tableIndexes = [0];
const config = {
  page: wikiPage,
  mapping,
  tableIndexes,
  maxRows: 10
};

const fs = require('fs');
const filename = './output/output.json';
const writeFile = false;

scraper
  .scrape(config)
  .then(results => {
    console.log(results);

    if (writeFile) {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename)
      }
      fs.writeFileSync(filename, JSON.stringify(results, null, 2));
      console.log(`${filename} written`);
    }

  })
  .catch(err => {
    console.log(err);
  })