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

module.exports = middle;