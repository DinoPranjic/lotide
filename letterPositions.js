const letterPositions = function(string) {
  const result = {};
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