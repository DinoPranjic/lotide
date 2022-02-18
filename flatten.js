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