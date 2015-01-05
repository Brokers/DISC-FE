'use strict';

describe('Directive: ngVisible', function () {

  // load the directive's module
  beforeEach(module('brokersWebPlatformApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-visible></ng-visible>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngVisible directive');
  }));
});
