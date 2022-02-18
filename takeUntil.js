const takeUntil = function(array, callback) {
  let results = [];
  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;