var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('about', { title: 'Totally Real Quotes' });
});


module.exports = router;
