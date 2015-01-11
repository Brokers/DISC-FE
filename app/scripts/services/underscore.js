'use strict';

/**
 * @ngdoc service
 * @name brokersFrontendApp.underscore
 * @description
 * # underscore
 * Factory in the brokersFrontendApp.
 */
angular.module('brokersFrontendApp')
  .factory('_', function ($window) {
    return $window._;
  });
