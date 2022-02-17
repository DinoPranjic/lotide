const { eqArrays } = require('../index');
const assert = require('chai').assert;

describe('#eqArrays', () => {

  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

  it('returns false for [1, 2, 3] and [3, 2, 1]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];

    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];

    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

  it('returns false for ["1", "2", "3"], ["1", "2", 3]', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", 3];

    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

});