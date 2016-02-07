'use strict';

angular.module('recogApp')
  .controller('GameController', [GameController]);

function GameController() {
  var vm = this;
  vm.home_screen = true;
  vm.game_screen = false;
  vm.recall_screen = false;
  vm.title = 'recog.io';
  vm.level = 1;
  var squared = (vm.level + 1) * (vm.level + 1);
  var counter = 1;
  vm.timer = '0:00';
  vm.generateTiles = generateTiles;
  vm.nextLevel = nextLevel;

  function generateTiles() {
    vm.tileList = [];
    var randArr = [];
    for (var i = 1; i <= squared; i++) {
      randArr[i] = i;
    }
    randArr.sort(function() {
      return Math.random() - 0.5;
    }).map(function(randNum) {
      var tile = {};
      tile.value = randNum;
      tile.flipped = false;
      vm.tileList.push(tile);
    });
  }

  function nextLevel() {
    vm.level++;
    squared = (vm.level + 1) * (vm.level + 1);
    vm.generateTiles();
  }
}
