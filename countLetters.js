const countLetters = function(string) {
  let count = {};
  for (const letter of string) {
    if (letter !== " " && count[letter]) {
      count[letter] += 1;
    } else if (letter !== " ") {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;

// TEST CODE countLetters("lighthouse in the house");