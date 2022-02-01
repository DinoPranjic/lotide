const eqArrays = function(firstArray, secondArray) {
  let isIdentical = true;
  if (firstArray.length !== secondArray.length) {
    isIdentical = false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        isIdentical = false;
      }
    }
  }
  return isIdentical;
};

const eqObjects = function(object1, object2) {
  let identical = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    identical = false;
    return identical;
  } else {
    for (const key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        identical = true;
      } else {
        identical = false;
      } if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          identical = false;
          return identical;
        } else {
          identical = true;
        }
      }
    }
  }
  return identical;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

/* TEST CODE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 5 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4, 5] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4] }, { b: [2, 3, 4, 6], a: '1' });
*/