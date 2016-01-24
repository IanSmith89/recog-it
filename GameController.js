'use strict';

angular.module('recogApp')
  .controller('GameController', [GameController]);

function GameController() {
  var vm = this;
  vm.title = 'recog.io';
}
