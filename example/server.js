'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

module.exports = app.listen(process.env.PORT || 3000);
