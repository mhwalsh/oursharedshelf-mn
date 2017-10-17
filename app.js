var request = require('request');
// var parseString = require('xml2js').parseString;
var parser = require('xml2json');

var express = require('express');
var app = express();

require('dotenv').config();

app.listen(3003);

app.get('/testGoodReads', function (req, res) {
    var url = 'https://www.goodreads.com/review/list.xml/?v=2&key=' + process.env.GR_API_KEY + '&id=20724685&shelf=our-share-shelf-mn';
    request(url, function name(error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        // parseString(body, function (err, result) {
        //     console.log(result);
        // });

        var json = parser.toJson(body);
        // console.log(json);
        res.send(json);

    });
});



