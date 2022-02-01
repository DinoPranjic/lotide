const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE countLetters("lighthouse in the house");