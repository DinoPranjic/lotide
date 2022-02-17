const { findKeyByValue } = require('../index');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('returns proper key when given value', () => {
    const tvShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const show = "The Wire";

    assert.strictEqual(findKeyByValue(tvShowsByGenre, show), "drama");
  });

  it('returns undefined when value isnt present', () => {
    const tvShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const show = "That 70s Show";

    assert.strictEqual(findKeyByValue(tvShowsByGenre, show), undefined);
  });

});