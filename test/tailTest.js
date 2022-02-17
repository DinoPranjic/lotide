const tail = require('../tail');
const assert = require('chai').assert;

describe('#Tail', () => {

  it('returns ["Lighthouse", "Labs"] for ["Bootcamp", "Lighthouse", "Labs"]', () => {
    const words = ["Bootcamp", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(tail(numbers), [2, 3, 4, 5,]);
  });

  it('leaves original array unchanged', () => {
    const words = ["Bootcamp", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Bootcamp", "Lighthouse", "Labs"]);
  })
});