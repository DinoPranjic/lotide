const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;

/*
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2, 4, 6, 8, 10];
const evenOrOdd = [2, 4, 7];

console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ['f', 'a', 'i', 'l', 's']);
assertArraysEqual(map(numbers, number => number * 2), [4, 8, 12, 16, 20]);
assertArraysEqual(map(evenOrOdd, number => number % 2 === 0), [true, true, false]);
*/