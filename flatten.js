const flatten = function(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArray.push(array[i]);
      
    } else if (Array.isArray(array[i])) {
      newArray.push(...array[i]); //spreads array and pushes into newArray
    }
  }
  return newArray;
};

module.exports = flatten;