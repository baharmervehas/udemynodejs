const scraper = require('./scraper');
const fs = require('fs');
const url = 'https://www.trendyol.com/trendyolmilla/saks-kisa-kase-kaban-tofaw19oi0019-p-3302940?boutiqueId=198658';

// Callback example
scraper.imgScrape(url, (data) => {
  console.log('data from scraper received');
  console.log(data);
})