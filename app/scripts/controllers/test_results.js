'use strict';

/**
 * @ngdoc function
 * @name brokersFrontendApp.controller:TestResultsCtrl
 * @description
 * # TestResultsCtrl
 * Controller of the brokersFrontendApp
 */
angular.module('brokersFrontendApp')
    .controller('TestResultsCtrl', function (
        $rootScope, $scope, $routeParams, $firebase, TestBaseControllerHandler, Reports
        ) {

        TestBaseControllerHandler($routeParams).then(function(test) {

            $scope.pdfLink = 'https://brokers-compute.herokuapp.com/pdf_report/' + test.$id;

            // function updateResults() {
            //     $scope.adaptedBehaivor = results['adapted_behaivor'];
            //     $scope.naturalBehaivor = results['natural_behaivor'];

            //     var reportPromise = Reports.generateReport(results);

            //     reportPromise
            //         .then(function(report) {
            //             $scope.report = report; 
            //         })
            //         .catch(function(err) {
            //             console.error(err);
            //         });
            // }

            // var results = $firebase(test.$inst().$ref().child("results")).$asObject();

            // results.$loaded(updateResults);
            // results.$watch(updateResults);

        });
    });
