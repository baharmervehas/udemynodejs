const request = require('request');
const cheerio = require('cheerio');

// Callback Example
exports.imgScrape = (url, cb) => {
  request(url, (error, resp, body) => {
    if(error) {
      cb({
        error: error
      });
    }
    let $ = cheerio.load(body);
    let $url = url;
    let $img = $('ul#thumbnailContainer li.flex-active-slide img').attr('src');
    let $title = $('h1').text();
    let $desc = $('span.sale-price').text();

  let image = {
    url: $url,
    img: "http:" + $img,
    title: $title,
    description: $desc
  }

  // respond with the final JSON
  console.log('scraped from scraper.js ', image);
  cb(image);

    });
}