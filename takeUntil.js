const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
      //pushes elements not fulfilling the callback
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;