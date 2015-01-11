'use strict';

/**
 * @ngdoc service
 * @name brokersFrontendApp.User
 * @description
 * # User
 * Factory in the brokersFrontendApp.
 */
angular.module('brokersFrontendApp')
  .factory('User', function(firebaseRef, $FirebaseObject, $firebase) {

    var main_ref = firebaseRef.get();

    var UserFactory = $FirebaseObject.$extendFactory({
      //getTests: function() {},

      addTest: function(test_id) {
        this.$inst().$ref().child('tests').child(test_id).set(true);
      },

      exist: function() {
        return Boolean(this.name);
      }
    });

    return function(user_id) {
      var ref = main_ref.child('users').child(user_id);
      var sync = $firebase(ref, { objectFactory: UserFactory });
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
  });
