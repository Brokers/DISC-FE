'use strict';

describe('Controller: TestResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('brokersWebPlatformApp'));

  var TestResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestResultsCtrl = $controller('TestResultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
