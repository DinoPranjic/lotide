const { middle } = require('../index');
const assert = require('chai').assert

describe('#Middle', () => {
  it('returns [2] for [1, 2, 3]', () => {
    const numbers = [1, 2, 3];
    assert.deepEqual(middle(numbers), [2]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(numbers), [3]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const numbers = [1, 2, 3, 4];
    assert.deepEqual(middle(numbers), [2, 3]);
  });

  it('returns ["Lighthouse"] for ["Bootcamp", "Lighthouse", "Labs"]', () => {
    const words = ["Bootcamp", "Lighthouse", "Labs"];
    assert.deepEqual(middle(words), ["Lighthouse"]);
  })

  it('Leaves original array unchanged', () => {
    const numbers = [1, 2, 3];
    middle(numbers);
    assert.deepEqual(numbers, [1, 2, 3]);
  })
});

/*
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);
middle([1]);
middle([1, 2]);
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));
*/