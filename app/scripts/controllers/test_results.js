'use strict';

/**
 * @ngdoc function
 * @name brokersFrontendApp.controller:TestResultsCtrl
 * @description
 * # TestResultsCtrl
 * Controller of the brokersFrontendApp
 */
angular.module('brokersFrontendApp')
  .controller('TestResultsCtrl', function ($rootScope, $scope, $routeParams, $firebase, TestBaseControllerHandler) {
    TestBaseControllerHandler($routeParams).then(function(test) {

      /*$scope.labels = ["Dominante", "Influyente", "Sereno", "Concienzudo"];
      $scope.colours = [
        Chart.defaults.global.colours[3],
        Chart.defaults.global.colours[2],
        Chart.defaults.global.colours[0],
        Chart.defaults.global.colours[4]
      ];
      $scope.scores = [100, 100, 100, 100];*/



      function update_results() {
        $scope.adapted_behaivor = results.adapted_behaivor;
        $scope.natural_behaivor = results.natural_behaivor;
        console.log($scope.adapted_behaivor);
        console.log($scope.natural_behaivor);
      }

      var results = $firebase(test.$inst().$ref().child("results")).$asObject();

      results.$loaded(update_results);
      results.$watch(update_results);

    });
  });
