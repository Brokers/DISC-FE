'use strict';

/**
 * @ngdoc service
 * @name brokersWebPlatformApp.underscore
 * @description
 * # underscore
 * Factory in the brokersWebPlatformApp.
 */
angular.module('brokersWebPlatformApp')
  .factory('_', function ($window) {
    return $window._;
  });
