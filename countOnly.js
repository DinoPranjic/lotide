const countOnly = function(allItems, itemsToRemove) {
  const result = {};

  for (const property in itemsToRemove) {
    if (itemsToRemove[property] === true) {
      for (const name of allItems) {
        if (name === property) {
          if (result[property]) {
            result[property] += 1; //if item occurs more than once, add 1

          } else {
            result[property] = 1; //creates new object key
          }
        }
      }
    }
  }
  return result;
};

module.exports = countOnly;