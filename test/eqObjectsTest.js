const { eqObjects } = require('../index');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('returns true for { a: "1", b: "2" } and { a: "1", b: "2" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "2" };

    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('returns false for { a: "2", b: "1" } and { a: "1", b: "2" }', () => {
    const ab = { a: "2", b: "1" };
    const ba = { a: "1", b: "2" };

    assert.strictEqual(eqObjects(ab, ba), false);
  });

  it('handles arrays as values and returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it('handles arrays and returns false for { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});