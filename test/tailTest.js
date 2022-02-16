const tail = require('../tail');
const assertEqual = require('../assertEqual');

//test to prove original array remains unchanged
const words = ["Bootcamp", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//use assertEqual to test tail function
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"