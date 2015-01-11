'use strict';

/**
 * @ngdoc service
 * @name brokersFrontendApp.TestBaseControllerHandler
 * @description
 * # TestBaseControllerHandler
 * Factory in the brokersFrontendApp.
 */
angular.module('brokersFrontendApp')
  .factory('TestBaseControllerHandler', function ($rootScope, $location, Test, $q) {
    return function($routeParams) {
      var test_id = $routeParams.testId;
      var deferred = $q.defer();

      if(!$rootScope.test) {

        var test = Test(test_id)
        test.$loaded().then(function() {
          if(test.exist()) {
            $rootScope.test = test;
            deferred.resolve($rootScope.test);
          } else {
            $location.path("/enter_code");
            deferred.reject("Wrong Code");
          }
        })
        .catch(function(error) {
          console.error(error);
          deferred.reject(error);
          $location.path("/enter_code");
        });

      } else {
        deferred.resolve($rootScope.test);
      }

      return deferred.promise.then(function() {
        var test = $rootScope.test;
        if(test.stage == "computed" || test.stage == "answered") {
          var results_path = "/test/" + test.$id + "/results";
          if($location.path() != results_path) {
            $location.path(results_path);
            return $q.reject("Test already solved");
          }
        }

        if(!$rootScope.user) $rootScope.user = test.getUser();

        return test;
      });
    };
  });
