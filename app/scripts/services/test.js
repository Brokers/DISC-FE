'use strict';

/**
 * @ngdoc service
 * @name brokersWebPlatformApp.Test
 * @description
 * # Test
 * Factory in the brokersWebPlatformApp.
 */
angular.module('brokersWebPlatformApp')
  .factory('Test', function($q, firebaseRef, $FirebaseObject, $firebase, User) {

    var main_ref = firebaseRef.get();
    var tests_ref = main_ref.child('tests');

    var TestFactory = $FirebaseObject.$extendFactory({
      exist: function() {
        return Boolean(this.code_used);
      },

      getUser: function() {
        if(!this.$user)
          this.$user = User(this.user_id);
        return this.$user;
      },

      getAnswers: function() {
        var ref = this.$inst().$ref();
        var answers_ref = ref.child('answers');
        return $firebase(answers_ref).$asObject();
      },

      getAnswerOf: function(question_id) {
        var ref = this.$inst().$ref();
        var answer_ref = ref.child('answers').child(question_id);
        return $firebase(answer_ref).$asObject();
      },
    });

    function create_from_ref(ref) {
      var sync = $firebase(ref, { objectFactory: TestFactory });
      var object = sync.$asObject();

      object.$loaded(
        //Success
        function() {
        },
        //Error
        function() {}
      );

      return object;
    }

    var Test = function(test_id) {
      var ref = tests_ref.child(test_id);
      return create_from_ref(ref);
    };

    Test.create = function(access_code, promise) {
      var user, new_test_ref, new_test;

      new_test_ref = tests_ref.push();
      new_test = create_from_ref(new_test_ref);

      access_code.$loaded()
        .then(function() {
          user = access_code.getUser();
          return user.$loaded();
        })
        .then(function() {
          new_test_ref.set({
            'user_id': user.$id,
            'date': firebaseRef.TIMESTAMP,
            'code_used': access_code.$id,
            'company_id': user.company_id,
            'stage': 'empty',
            'answers': {},
            'results': {}
          },
          function(error) {
            if (error) {
              if(promise) promise.reject(error);
            } else {
              if(promise) promise.resolve();
            }
          });
        });

      return new_test;
    };

    return Test;
  });
