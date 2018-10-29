var express = require('express');
var request = require('request');
//fs is native to notice node.js
var fs = require('fs');

var app = express();
var port = 8080;

// var url = "http://google.com";
// request(url,function(err,resp,body){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(body);
// 	}
// });

var url = "https://www.producthunt.com/";
var destination = fs.createWriteStream('./downloads/google2.html');
request(url)
 .pipe(destination)
 .on('finish', function(){
 	console.log('Done!');
 })
 .on('error', function(err){
 	console.log(err)
 })


app.listen(port, function(){
	console.log('app listen on port' + port);
});
