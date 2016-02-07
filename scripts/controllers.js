'use strict';

angular.module('recogApp')
  .controller('GameController', ['gameTiles', GameController]);

function GameController(gameTiles) {
  var vm = this;
  vm.home_screen = true;
  vm.game_screen = false;
  vm.recall_screen = false;
  vm.title = 'recog.io';
  vm.level = gameTiles.level;
  vm.timer = '0:00';
  vm.startGame = startGame;
  vm.levelUp = levelUp;

  function startGame() {
    vm.tileList = gameTiles.generate(vm.level);
  }

  function levelUp() {
    vm.level++;
    vm.tileList = gameTiles.generate(vm.level);
  }
}
