'use strict';

angular.module('recogApp')
  .directive('mdGridTile', ['gameTiles', mdGridTile]);

function mdGridTile(gameTiles) {
  return {
    link: function(scope, element, attrs) {
      var value = Number(attrs.id);
      var root = Number(attrs.level) + 1;
      var tileRatio = value / root;

      if (tileRatio <= 1) {
        element.addClass('one');
      } else if (tileRatio > 1 && tileRatio <= 2) {
        element.addClass('two');
      } else if (tileRatio > 2 && tileRatio <= 3) {
        element.addClass('three');
      } else if (tileRatio > 3 && tileRatio <= 4) {
        element.addClass('four');
      } else if (tileRatio > 4 && tileRatio <= 5) {
        element.addClass('five');
      } else if (tileRatio > 5 && tileRatio <= 6) {
        element.addClass('six');
      } else if (tileRatio > 6 && tileRatio <= 7) {
        element.addClass('seven');
      } else {
        element.addClass('eight');
      }

      element.on('click', function() {
        if (gameTiles.check(value) === 'match') {
          element.css({
            background: 'rgba(0, 0, 0, 0.1)'
          })
          .empty();
        } else if (gameTiles.check(value) === 'level up') {
          element.css({
            background: 'rgba(0, 0, 0, 0.1)'
          })
          .empty();
          console.log('level up');
        } else {
          console.log('wrong');
        }
      });
    }
  };
}
