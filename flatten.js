const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArray.push(array[i]);
    } else if (Array.isArray(array[i])) {
      newArray.push(...array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;

// TEST CODE flatten([1, 2, [3, 4], 5, [6]]);