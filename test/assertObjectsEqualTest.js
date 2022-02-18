const { assertObjectsEqual } = require('../index');

// TEST CODE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 5 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4, 5] }, { b: [2, 3, 4], a: '1' });
assertObjectsEqual({ a: '1', b: [2, 3, 4, 5] }, { b: [2, 3, 4, 6], a: '1' });
