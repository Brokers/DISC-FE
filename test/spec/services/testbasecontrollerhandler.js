'use strict';

describe('Service: TestBaseControllerHandler', function () {

  // load the service's module
  beforeEach(module('brokersWebPlatformApp'));

  // instantiate service
  var TestBaseControllerHandler;
  beforeEach(inject(function (_TestBaseControllerHandler_) {
    TestBaseControllerHandler = _TestBaseControllerHandler_;
  }));

  it('should do something', function () {
    expect(!!TestBaseControllerHandler).toBe(true);
  });

});
