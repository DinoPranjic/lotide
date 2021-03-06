const { letterPositions } = require('../index');
const assert = require('chai').assert;

describe('#letterPositions', () => {

  it('returns letter positions for single word', () => {
    const word = "hello";
    const result = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };

    assert.deepEqual(letterPositions(word), result);
  });
  
  it('returns letter positions for sentences, ignoring spaces', () => {
    const sentence = "lighthouse in the house";
    const result = {
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ]
    };

    assert.deepEqual(letterPositions(sentence), result);

  });

});

//console.log(letterPositions("lighthouse in the house"));
/*
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
}
*/

