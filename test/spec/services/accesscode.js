'use strict';

describe('Service: AccessCode', function () {

  // load the service's module
  beforeEach(module('brokersWebPlatformApp'));

  // instantiate service
  var AccessCode;
  beforeEach(inject(function (_AccessCode_) {
    AccessCode = _AccessCode_;
  }));

  it('should do something', function () {
    expect(!!AccessCode).toBe(true);
  });

});
