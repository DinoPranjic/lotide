const { countOnly } = require('../index');
const assert = require('chai').assert;

describe('#countOnly', () => {

  it('returns proper count of items to remove', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const namesToRemove = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    const result = { Jason: 1, Fang: 2 };

    assert.deepEqual(countOnly(firstNames, namesToRemove), result);
  });
});