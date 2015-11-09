var express = require('express');
var router = express.Router();
//call json data
var names = require('../data/people.json');
var quotes = require('../data/quotes.json');
//get data.js
var d = require('../helper/data.js');
//create new Data object
var Data = new d(names, quotes);

//handle index route
router.get('/', function(req, res, next){
  //rand_id and rand_name help generate a url for the next random quote
  res.render('index', {
    title: 'Totally Real Quotes',
    rand_id: Data.randomId(quotes),
    rand_name: Data.randName(Data.nameList)
  });
});


module.exports = router;
