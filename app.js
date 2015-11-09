'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var routes = require('./routes/index');
var quotes = require('./routes/quotes');
var about  = require('./routes/about');
var contact  = require('./routes/contact');

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/', routes);
app.use('/', quotes);
app.use('/about', about);
app.use('/contact', contact);

app.use(function(req, res, next) {
  res.render('error', {title: 'Actual Legit Quotes'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
