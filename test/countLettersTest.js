const { countLetters } = require('../index');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('returns proper count for "lighthouse in the house"', () => {
    const sentence = "lighthouse in the house";
    const result = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

    assert.deepEqual(countLetters(sentence), result);
  });

});