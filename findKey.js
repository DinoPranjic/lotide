const findKey = function(object, callback) {
  let result = undefined;

  for (const key in object) {
    if (callback(object[key])) {
      result = key; //returns key according to callback
      return result;
    }
  }
  return result;
};

module.exports = findKey;