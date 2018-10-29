var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = "https://www.defacto.com.tr/kadin/giyim-kadin-denim";

request(url, function(err, resp, body) {
  var $ = cheerio.load(body);

  const products = [];

  $('.product-item.col-md-4.col-sm-4.col-xs-6').each(function(i, elem){
      prod_title = $('.prc-name h2').eq(i).text();
      prod_price = $('.product-amount i').eq(i).text();
      prod_url = $(this).find('a').attr('href');
      var product = {
        "prod_title" : prod_title,
        "prod_price": prod_price,
        "prod_url": prod_url
      }
      products[i] = product;
  });
  products.join(', ');

  console.log(products);
});

app.listen(port, function() {
  console.log('app listening on port ' + port);
});