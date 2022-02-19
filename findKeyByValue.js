const findKeyByValue = function(object, value) {
  let result = undefined;

  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      result = key; //returns key with matching value
    }
  }
  return result;
};

module.exports = findKeyByValue;