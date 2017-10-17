var express = require('express');
var app = express();
// request for server side request and parser for xmltojson
var request = require('request');
var parser = require('xml2json');
// env config included
require('dotenv').config();

app.listen(3003);

app.get('/testGoodReads', function (req, res) {
    var url = 'https://www.goodreads.com/review/list.xml/?v=2&key=' + process.env.GR_API_KEY + '&id=20724685&shelf=our-share-shelf-mn';
    request(url, function name(error, response, body) {
        var json = parser.toJson(body);
        res.send(json);
    });
});