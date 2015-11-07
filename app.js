'use strict';

var express = require('express');
var app = express();
var routes = require('./routes/index');
var quotes = require('./routes/quotes');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/', routes);
app.use('/', quotes);


app.use(function(req, res, next) {
  res.render('error', {title: 'Actual Legit Quotes'});
});

app.listen(3000, function(){
  console.log("Running on port 3000");
});
