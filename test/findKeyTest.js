const { findKey } = require('../index');
const assert = require('chai').assert;

describe('#findKey', () => {
  it('returns proper key when given callback function', () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const result = "noma";

    assert.strictEqual(findKey(obj, x => x.stars === 2), result);
    
  });

});