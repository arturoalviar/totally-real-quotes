var express = require('express');
var router = express.Router();
var names = require('../data/people.json');
var quotes = require('../data/quotes.json');
//get the data.js file
var d = require('../helper/data.js');
//create Data object which will store a list of quotes and people
//this acts as our "database"
var Data = new d(names, quotes);

//url consists of a name and quote id
router.get('/:name/:id', function(req, res, next){
  //store url :name and :id param
  var name = req.params.name;
  var id = req.params.id;

  //look up :name and :id in data and store
  var nameVal = Data.names[name];
  var idVal = Data.quotes[id];

  //validate that :name and :id exist in "database"; if undefined, it does not exist. Show error page
  if(typeof(nameVal) === "undefined" || typeof(idVal) === "undefined" ){
    res.render('error', {title: 'Totally Real Quotes'});
  }
  else{
  /*
    1.name finds name in people.json
    2.id finds id in quotes.json
    3.rand id is used to generate new url
    4.rand name does the same as rand id
  */
    res.render('quotes', {
      title: 'Totally Real Quotes',
      name: nameVal,
      id: idVal,
      rand_id: Data.randomId(quotes),
      rand_name: Data.randName(Data.nameList)
    });
  }
});


module.exports = router;
