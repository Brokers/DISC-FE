'use strict';

describe('Directive: discGraphicBar', function () {

  // load the directive's module
  beforeEach(module('brokersFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disc-graphic-bar></disc-graphic-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discGraphicBar directive');
  }));
});
