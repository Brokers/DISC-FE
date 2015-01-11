'use strict';

/**
 * @ngdoc function
 * @name brokersFrontendApp.controller:TestQuestionsCtrl
 * @description
 * # TestQuestionsCtrl
 * Controller of the brokersFrontendApp
 */
angular.module('brokersFrontendApp')
  .controller('TestQuestionsCtrl', function ($rootScope, $scope, $routeParams, $firebase, fbURL, TestBaseControllerHandler) {
    TestBaseControllerHandler($routeParams).then(function(test) {
      var main_ref = new Firebase(fbURL);

      var questions_ref = main_ref.child('questions');
      $scope.questions = $firebase(questions_ref).$asObject();
      $scope.question_id = Number($routeParams.questionId);
      $scope.question_answer = $rootScope.test.getAnswerOf($scope.question_id);

      $scope.answer = function(answer_type, option_id) {
        var inverse_type = answer_type == 'M' ? 'Me': 'M';

        if($scope.question_answer[inverse_type] == option_id) {
          throw new Error("This option is taken by other answer type.");
        }

        $scope.question_answer[answer_type] = option_id;
        $scope.question_answer.$save();
      }

      $scope.next = function() {
        if(typeof $scope.question_answer.M != 'number' ||
          typeof $scope.question_answer.Me != 'number') {
          alert("Debe seleccionar M y Me");
          return;
        }

        var next_question_id = $scope.question_id + 1;
        if($scope.questions[next_question_id] === undefined) {
            $rootScope.test.stage = 'answered';
            $rootScope.test.$save();

            $scope.question_answer.$destroy();

            window.location.href = '#/test/'+$routeParams.testId+'/results';
        } else {
            window.location.href = '#/test/'+$routeParams.testId+'/questions/'+next_question_id;
        }
      }
    });
  });
