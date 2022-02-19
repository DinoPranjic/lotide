//const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  let isIdentical = true;

  if (firstArray.length !== secondArray.length) {
    isIdentical = false; //checks length first

  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        isIdentical = false; //checks if each element is the same
      }
    }
  }
  return isIdentical;
};

module.exports = eqArrays;