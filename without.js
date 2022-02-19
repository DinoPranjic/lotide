const without = function(source, itemsToRemove) {
  let newArray = [...source]; //copies source array into new array

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
        //removes element
      }
    }
  }
  return newArray;
};

module.exports = without;