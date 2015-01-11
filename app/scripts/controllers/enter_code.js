'use strict';
/**
 * @ngdoc function
 * @name brokersFrontendApp.controller:EnterCodeCtrl
 * @description
 * # EnterCodeCtrl
 * Controller of the brokersFrontendApp
 */
angular.module('brokersFrontendApp')
  .controller('EnterCodeCtrl', function ($rootScope, $scope, $q, AccessCode, $location) {

    $scope.code = "";
    $scope.error = "";
    $scope.loading = false;

    $scope.checkCode = function(ev) {
      var code_length = $scope.code.length;
      $scope.error = "";
      $scope.loading = false;

      if(code_length == 6) {
        $scope.loading = true;

        $rootScope.access_code = AccessCode($scope.code);

        $rootScope.access_code.$loaded()
          .then(function() {
            if(!$rootScope.access_code.isValid()) {
              return $q.reject("Código incorrecto.");
            } else {
              $rootScope.user = $rootScope.access_code.getUser();
              $rootScope.test = $rootScope.access_code.getTest();

              return $q.all([
                $rootScope.user.$loaded(),
                $rootScope.test.$loaded()
              ]);
            }
          })
          .then(
            function() {
              $location.path("/test/" + $rootScope.test.$id + "/intro");
            },
            //Error
            function(err) {
              $scope.error = err;
              $scope.loading = false;
            }
          );

      } else {
        if(code_length > 6) {
          $scope.error = "Código muy largo.";
        } else {
          $scope.error = "Código muy corto.";
        }
      }
    };

  });
