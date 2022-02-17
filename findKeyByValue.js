const findKeyByValue = function(object, value) {
  let result = undefined;
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;

/* TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/