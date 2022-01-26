const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstElement = [...array].shift();

  return firstElement;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");