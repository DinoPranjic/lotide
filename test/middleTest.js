const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);
middle([1]);
middle([1, 2]);
assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));