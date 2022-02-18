const letterPositions = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " " && result[string[i]]) {
      result[string[i]].push(i);
    } else if (string[i] !== " ") {
      result[string[i]] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));