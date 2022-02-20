const { without } = require('../index');
const assert = require('chai').assert;

describe('#without', () => {

  it('takes an array of numbers and an array and returns a new array', () => {
    const nums = [1, 2, 3];
    const remove = [1];
    const result = [2, 3];

    assert.deepEqual(without(nums, remove), result);

  });

  it('takes an array of strings and an array and returns a new array', () => {
    const words = ["hello", "world", "lighthouse"];
    const remove = ["lighthouse"];
    const result = ["hello", "world"];

    assert.deepEqual(without(words, remove), result);

  });
  
  it('takes in mixed arrays and checks for types and returns new array', () => {
    const nums = ["1", "2", "3"];
    const remove = [1, 2, "3"];
    const result = ["1", "2"];

    assert.deepEqual(without(nums, remove), result);

  });

  it('takes in arrays with multiple instances of the same number', () => {
    const nums = ["1", "1", "1", "2", "3", "1" , "1"];
    const remove = ["1", 2, "3"];
    const result = ["2"];

    assert.deepEqual(without(nums, remove), result);

  });

});

/* TEST CODE
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/