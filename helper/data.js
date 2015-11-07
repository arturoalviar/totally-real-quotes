'use strict';

var Data = function(n, q){
  this.names = n;
  this.quotes = q;
  this.nameList = Object.keys(n);
  this.quoteList = Object.keys(q);
}

Data.prototype.randomId = function(q){
  return Math.floor(Math.random()*(Object.keys(q).length));
}

Data.prototype.randName = function(nameList){
  var rand = Math.floor(Math.random()*(nameList.length));
  return nameList[rand];
}

module.exports = Data;
