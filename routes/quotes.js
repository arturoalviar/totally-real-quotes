var express = require('express');
var router = express.Router();
var names = require('../data/people.json');
var quotes = require('../data/quotes.json');
//get the data.js file
var d = require('../helper/data.js');
//create Data object which will store a list of quotes and people
var Data = new d(names, quotes);

//url consists of a name and quote id
router.get('/:name/:id', function(req, res, next){
  //store url :name and :id param
  var name = req.params.name;
  var id = req.params.id;

  var tempId = parseInt(id, 10);
  if( tempId < 0 || tempId > Data.quoteList.length || isNaN(id)){
    res.render('error', {title: 'Totally Real Quotes'});
  }
  else{
  //name finds name in people.json
  //id finds id in quotes.json
  //rand id is used to generate new url
  //rand name does the same as rand id
    res.render('quotes', {
      title: 'Totally Real Quotes',
      name: Data.names[name],
      id: Data.quotes[id],
      rand_id: Data.randomId(quotes),
      rand_name: Data.randName(Data.nameList)
    });
  }
});


module.exports = router;
