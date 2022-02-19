const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let identical = false;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    identical = false;
    return identical; //checks if number of keys are equal first

  } else {
    for (const key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        identical = true; //checks if values are the same

      } else {
        identical = false;

      } if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          identical = false;
          return identical; //checks if object values are arrays

        } else {
          identical = true;
        }
      }
    }
  }
  return identical;
};

module.exports = eqObjects;