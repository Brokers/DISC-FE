'use strict';

describe('Controller: TestQuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('brokersWebPlatformApp'));

  var TestQuestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestQuestionsCtrl = $controller('TestQuestionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
