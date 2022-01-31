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

const middle = function(array) {
  let middleOfArray = [];
  if (array.length > 2 && array.length % 2 === 1) {
    middleOfArray.push(array[Math.floor((array.length - 1) / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    middleOfArray.push(array[Math.floor((array.length - 1) / 2)]);
    middleOfArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleOfArray;
};

/* TEST CODE
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);
middle([1]);
middle([1, 2]);
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));
*/
