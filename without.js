const without = function(source, itemsToRemove) {
  const newArray = [];

  for (const element of source) {
    if (itemsToRemove.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  return newArray;

};

module.exports = without;