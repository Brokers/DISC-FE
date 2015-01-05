'use strict';

/**
 * @ngdoc function
 * @name brokersWebPlatformApp.controller:TestResultsCtrl
 * @description
 * # TestResultsCtrl
 * Controller of the brokersWebPlatformApp
 */
angular.module('brokersWebPlatformApp')
  .controller('TestResultsCtrl', function ($rootScope, $scope, $routeParams, $firebase, TestBaseControllerHandler) {
    TestBaseControllerHandler($routeParams).then(function(test) {

      $scope.labels = ["Dominante", "Influyente", "Sereno", "Concienzudo"];
      $scope.colours = [
        Chart.defaults.global.colours[3],
        Chart.defaults.global.colours[2],
        Chart.defaults.global.colours[0],
        Chart.defaults.global.colours[4]
      ];
      $scope.scores = [100, 100, 100, 100];

      function update_results() {
        $scope.scores = _(results.scores).values();
      }

      var results = $firebase(test.$inst().$ref().child("results")).$asObject();

      results.$loaded(update_results);
      results.$watch(update_results);

    });
  });
