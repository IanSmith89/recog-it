'use strict';

angular.module('recogApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'GameController as GC'
      });
  });
