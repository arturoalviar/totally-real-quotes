var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('contact', { title: 'Totally Legit Quotes' });
});


module.exports = router;
