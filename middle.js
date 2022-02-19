const middle = function(array) {
  let middleOfArray = [];

  if (array.length > 2 && array.length % 2 === 1) {

    middleOfArray.push(array[Math.floor((array.length - 1) / 2)]);
    //returns middle element if array length is odd
    
  } else if (array.length > 2 && array.length % 2 === 0) {

    middleOfArray.push(array[Math.floor((array.length - 1) / 2)]);
    middleOfArray.push(array[Math.floor(array.length / 2)]);
    //returns two middle elements if array length is even
  }
  return middleOfArray;
};

module.exports = middle;