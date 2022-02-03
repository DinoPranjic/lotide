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

const takeUntil = function(array, callback) {
  let results = [];
  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);