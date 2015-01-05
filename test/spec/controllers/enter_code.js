'use strict';

describe('Controller: EnterCodeCtrl', function () {

  // load the controller's module
  beforeEach(module('brokersWebPlatformApp'));

  var EnterCodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnterCodeCtrl = $controller('EnterCodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
