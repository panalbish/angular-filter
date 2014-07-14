'use strict';

describe('maxFilter', function () {

  var filter;

  beforeEach(module('math.max'));

  beforeEach(inject(function ($filter) {
    filter = $filter('max');
  }));

  it('should get an array of numbers and return the biggest one', function() {

    expect(filter([1,2,3,4,5])).toEqual(5);
    expect(filter([2,2,2,2,2])).toEqual(2);
    expect(filter([1])).toEqual(1);

  });

  it('should get an !array and return it as-is', function() {

    expect(filter('string')).toEqual('string');
    expect(filter({})).toEqual({});
    expect(filter(!0)).toBeTruthy();

  });

});
