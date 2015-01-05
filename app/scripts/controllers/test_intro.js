'use strict';

/**
 * @ngdoc function
 * @name brokersWebPlatformApp.controller:TestIntroCtrl
 * @description
 * # TestIntroCtrl
 * Controller of the brokersWebPlatformApp
 */
angular.module('brokersWebPlatformApp')
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
