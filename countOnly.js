const countOnly = function(allItems, itemsToRemove) {
  let result = {};
  for (const property in itemsToRemove) {
    if (itemsToRemove[property] === true) {
      for (const name of allItems) {
        if (name === property) {
          if (result[property]) {
            result[property] += 1;
          } else {
            result[property] = 1;
          }
        }
      }
    }
  }
  return result;
};

module.exports = countOnly;

/* TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/