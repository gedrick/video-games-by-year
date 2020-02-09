const scraper = require('wikipedia-table-scraper');
const mapping = require('./mapping');
const wikiPage = 'List_of_Super_Nintendo_Entertainment_System_games';
const tableIndexes = [0];
const config = {
  page: wikiPage,
  mapping,
  tableIndexes
};

const fs = require('fs');
const filename = './output/output.json';
const writeFile = true;

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