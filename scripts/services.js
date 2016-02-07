'use strict';

angular.module('recogApp')
  .service('gameTiles', [gameTiles]);

function gameTiles() {
  this.generate = generate;
  this.check = check;
  this.level = 1;
  var root = this.level + 1;
  var squared = root * root;
  var counter = 1;

  function generate(level) {
    counter = 1;
    root = level + 1;
    squared = root * root;
    var tileList = [];
    var randArr = [];
    for (var i = 1; i <= squared; i++) {
      randArr[i] = i;
    }
    randArr.sort(function() {
      return Math.random() - 0.5;
    }).forEach(function(randNum) {
      var tile = {};
      tile.value = randNum;
      tile.flipped = false;
      tile.level = level;
      tileList.push(tile);
    });
    return tileList;
  }

  function check(value) {
    if (value === counter && value === squared) {
      return 'level up';
    } else if (value === counter) {
      counter++;
      return 'match';
    }
  }
}
