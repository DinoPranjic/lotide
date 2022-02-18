const { takeUntil } = require('../index');
const assert = require('chai').assert;

describe('#takeUntil', () => {

  it('takes an array of numbers and returns array according to callback', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = [1, 2, 5, 7, 2];

    assert.deepEqual(takeUntil(data, num => num < 0), result);

  });

  it('takes an array of strings and returns an array according to callback', () => {
    const words = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = ["I've", "been", "to", "Hollywood"];

    assert.deepEqual(takeUntil(words, word => word === ","), result);

  });

});