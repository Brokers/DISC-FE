'use strict';

/**
 * @ngdoc service
 * @name brokersWebPlatformApp.AccessCode
 * @description
 * # AccessCode
 * Factory in the brokersWebPlatformApp.
 */
angular.module('brokersWebPlatformApp')
  .factory('AccessCode', function($q, firebaseRef, $FirebaseObject, $firebase, User, Test) {

    var main_ref = firebaseRef.get();

    var AccessCodeFactory = $FirebaseObject.$extendFactory({
      $user: undefined,
      $test: undefined,

      getTest: function() {
        if(!this.$test) {
          if(!this.test_id) {
            this.assingTest(Test.create(this));
          } else {
            this.$test = Test(this.test_id);
          }
        }
        return this.$test;
      },

      assingTest: function(test) {
        var self = this;
        self.$test = test;
        $q.all([test.$loaded(), this.getUser().$loaded()])
        .then(function() {
          self.test_id = test.$id;
          self.$save();
          self.$user.addTest(self.test_id);
        });
      },

      getUser: function() {
        if(!this.$user)
          this.$user = User(this.user_id);
        return this.$user;
      },

      isValid: function() {
        return Boolean(this.user_id);
      }
    });

    return function(code_key) {
      var ref = main_ref.child('access_codes').child(code_key);
      var sync = $firebase(ref, { objectFactory: AccessCodeFactory });
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
