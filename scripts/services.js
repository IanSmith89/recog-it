'use strict';

angular.module('recogApp')
  .service('gameTiles', [gameTiles]);

function gameTiles() {
  this.generate = generate;
  this.check = check;
  var counter = 1;

  function generate(level) {
    var root = level + 1;
    var squared = root * root;
    counter = 1;
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

  function check(value, attrs) {
    var squared = (attrs.id + 1) * (attrs.id + 1);
    if (value === counter && value === squared) {
      return 'level up';
    } else if (value === counter) {
      counter++;
      return 'match';
    }
  }
}
