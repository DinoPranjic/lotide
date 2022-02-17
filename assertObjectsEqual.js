const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

/* TEST CODE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 5 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4, 5] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4, 5] }, { b: [2, 3, 4, 6], a: '1' });
*/