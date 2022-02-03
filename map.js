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

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;

};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2, 4, 6, 8, 10];
const evenOrOdd = [2, 4, 7];

console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ['f', 'a', 'i', 'l', 's']);
assertArraysEqual(map(numbers, number => number * 2), [4, 8, 12, 16, 20]);
assertArraysEqual(map(evenOrOdd, number => number % 2 === 0), [true, true, false]);
