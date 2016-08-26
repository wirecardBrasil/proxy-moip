var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var proxy = require('express-http-proxy');

var app = require('express')();

app.use('/proxy', proxy('www.google.com'));
