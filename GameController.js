'use strict';

angular.module('recogApp')
  .controller('GameController', [GameController]);

function GameController() {
  var vm = this;
  vm.home_screen = true;
  vm.game_screen = false;
  vm.recall_screen = false;
  vm.title = 'memor.io';
  vm.level = 1;
  vm.current = 1;
  vm.target = (vm.level + 1) * (vm.level + 1);
  vm.timer = 0;
  vm.tileList = [];
  vm.generateTiles = generateTiles;

  function generateTiles() {
    var randArr = [];
    for (var i = 1; i <= vm.target; i++) {
      randArr[i] = i;
    }
    randArr.sort(function() {
      return Math.random() - 0.5;
    });
    randArr.map(function(num) {
      var tile = {};
      tile.value = num;
      tile.flipped = false;
      vm.tileList.push(tile);
    });
  }
}
