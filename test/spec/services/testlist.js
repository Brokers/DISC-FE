'use strict';

describe('Service: TestList', function () {

  // load the service's module
  beforeEach(module('brokersWebPlatformApp'));

  // instantiate service
  var TestList;
  beforeEach(inject(function (_TestList_) {
    TestList = _TestList_;
  }));

  it('should do something', function () {
    expect(!!TestList).toBe(true);
  });

});
