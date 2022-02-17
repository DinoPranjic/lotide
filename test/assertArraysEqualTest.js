const { assertArraysEqual } = require('../index');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);
assertArraysEqual(["1", 2, 3], [1, 2, 3]);
assertArraysEqual([2, 3, 4], [2, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);