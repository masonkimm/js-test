const { expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('is it duplicate', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(cloneArray(arr)).toEqual(arr);
});
