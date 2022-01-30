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

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArray.push(array[i]);
    } else if (Array.isArray(array[i])) {
      newArray.push(...array[i]);
    }
  }
  return console.log(newArray);
};

// TEST CODE flatten([1, 2, [3, 4], 5, [6]]);