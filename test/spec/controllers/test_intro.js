'use strict';

describe('Controller: TestIntroCtrl', function () {

  // load the controller's module
  beforeEach(module('brokersWebPlatformApp'));

  var TestIntroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestIntroCtrl = $controller('TestIntroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
