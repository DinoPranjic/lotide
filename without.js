const without = function(source, itemsToRemove) {
  let newArray = [...source];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

module.exports = without;

/* TEST CODE
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/