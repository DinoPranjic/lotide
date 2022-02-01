const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let isIdentical = true;
  if (firstArray.length !== secondArray.length) {
    isIdentical = false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        isIdentical = false;
      }
    }
  }
  return isIdentical;
};

const eqObjects = function(object1, object2) {
  let identical = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    identical = false;
    return identical;
  } else {
    for (const key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        identical = true;
      } else {
        identical = false;
      } if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          identical = false;
          return identical;
        } else {
          identical = true;
        }
      }
    }
  }
  return identical;
};

/* TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
console.log(assertEqual(eqObjects(cd, cd2), true));
*/