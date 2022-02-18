const findKey = function(object, callback) {
  let result = undefined;
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

module.exports = findKey;