'use strict';

/**
 * @ngdoc function
 * @name brokersFrontendApp.controller:TestIntroCtrl
 * @description
 * # TestIntroCtrl
 * Controller of the brokersFrontendApp
 */
angular.module('brokersFrontendApp')
  .controller('TestIntroCtrl', function ($rootScope, $scope, $routeParams, TestBaseControllerHandler) {
    TestBaseControllerHandler($routeParams);
    /*
    $rootScope.test = {
      'user': 'USER_ID',
      'date': 1417729380363,
      'company': 'COMPANY_ID',
      'answers': {},
      'results': null
    };
    */

  });
