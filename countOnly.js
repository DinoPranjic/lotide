const countOnly = function(allItems, itemsToRemove) {
  let result = {};
  for (const property in itemsToRemove) {
    if (itemsToRemove[property] === true) {
      for (const name of allItems) {
        if (name === property) {
          if (result[property]) {
            result[property] += 1;
          } else {
            result[property] = 1;
          }
        }
      }
    }
  }
  return result;
};

module.exports = countOnly;