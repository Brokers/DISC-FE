'use strict';

/**
 * @ngdoc overview
 * @name brokersFrontendApp
 * @description
 * # brokersFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('brokersFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'firebase'
  ])
  .value('fbURL', 'https://brokers.firebaseio.com/')
  .run(function($rootScope) {
    window.$rootScope = $rootScope;
  })
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/enter_code', {
        templateUrl: 'views/enter_code.html',
        controller: 'EnterCodeCtrl'
      })
      .when('/test/:testId/intro', {
        templateUrl: 'views/test_intro.html',
        controller: 'TestIntroCtrl'
      })
      .when('/test/:testId/questions/:questionId', {
        templateUrl: 'views/test_questions.html',
        controller: 'TestQuestionsCtrl'
      })
      .when('/test/:testId/results', {
        templateUrl: 'views/test_results.html',
        controller: 'TestResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
