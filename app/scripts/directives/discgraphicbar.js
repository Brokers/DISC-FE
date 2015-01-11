'use strict';

/**
 * @ngdoc directive
 * @name brokersFrontendApp.directive:discGraphicBar
 * @description
 * # discGraphicBar
 */
angular.module('brokersFrontendApp')
  .directive('discGraphicBar', function () {
    return {
      templateUrl: 'views/directives/discgraphicbar.html',
      restrict: 'AEC',
      transclude: true,
      scope: {
        score: '='
      },
      link: function postLink(scope, element, attrs) {
        console.log(scope.score);
      }
    };
  });
