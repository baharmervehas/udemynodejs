const scraper = require('./scraper');
const fs = require('fs');
const url = 'https://www.trendyol.com/trendyolmilla/saks-kisa-kase-kaban-tofaw19oi0019-p-3302940?boutiqueId=198658';
const path = 'text.txt'

// Callback example
// scraper.imgScrape(url, (data) => {
//   console.log('data from scraper received');
//   console.log(data);
// })

// Promise example
scraper.imgScrape2(url)
  .then((data) => {
    console.log('data from scraper received ');
    fs.writeFile(path, JSON.stringify(data), (error) => {
      if(error) {
        console.log(error);
      }
      console.log('Successfully wrote to ' + path);
    })
  })
  .catch((error) => {
    console.log('error scraping data');
  })