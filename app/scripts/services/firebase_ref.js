'use strict';

var Firebase = window.Firebase;

/**
 * @ngdoc service
 * @name brokersWebPlatformApp.firebaseRef
 * @description
 * # firebaseRef
 * Service in the brokersWebPlatformApp.
 */
angular.module('brokersWebPlatformApp')
  .service('firebaseRef', function ($firebase, fbURL) {
    var main_ref = new Firebase(fbURL);

    this.get = function() {
      return main_ref;
    };

    this.TIMESTAMP = Firebase.ServerValue.TIMESTAMP;

  });
