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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`👍👍👍Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${array1} !== ${array2}`);
  }
};

/* TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);
assertArraysEqual(["1", 2, 3], [1, 2, 3]);
assertArraysEqual([2, 3, 4], [2, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
*/