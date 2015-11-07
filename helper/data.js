'use strict';

var Data = function(n, q){
  this.names = n;
  this.quotes = q;
  this.nameList = Object.keys(n);
  this.quoteList = Object.keys(q);
}

Quotes.prototype.randomId = function(q){
  return Math.floor(Math.random()*(Object.keys(q).length));
}

Quotes.prototype.randName = function(nameList){
  var rand = Math.floor(Math.random()*(nameList.length));
  return nameList[rand];
}

module.exports = Data;
