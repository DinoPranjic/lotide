const { map } = require('../index');
const assert = require('chai').assert;

describe('#map', () => {
  
  it('takes an array of strings and maps out according to callback', () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const result = ['g', 'c', 't', 'm', 't'];

    assert.deepEqual(map((words), word => word[0]), result);
  });

  it('takes an array of numbers and maps out according to callback', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = [4, 8, 12, 16, 20];

    assert.deepEqual(map(numbers, num => num * 2), result);
  });

  it('returns empty array if given empty array', () => {
    const numbers = [];
    const result = [];

    assert.deepEqual(map(numbers, num => num * 2), result);

  });

});