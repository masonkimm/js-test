const { expect } = require('@jest/globals');
const sum = require('./sum');

// 1 + 2 == 3

test('adds two number', () => {
  expect(sum(1, 2)).toBe(3);
});
