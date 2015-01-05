'use strict';

describe('Service: firebaseRef', function () {

  // load the service's module
  beforeEach(module('brokersWebPlatformApp'));

  // instantiate service
  var firebaseRef;
  beforeEach(inject(function (_firebaseRef_) {
    firebaseRef = _firebaseRef_;
  }));

  it('should do something', function () {
    expect(!!firebaseRef).toBe(true);
  });

});
