const countLetters = function(string) {
  let count = {};

  for (const letter of string) {
    if (letter !== " " && count[letter]) {
      count[letter] += 1; //if letter occurs more than once add 1

    } else if (letter !== " ") {
      count[letter] = 1; //checks if object key exists
    }
  }
  return count;
};

module.exports = countLetters;