const { expect } = require('@jest/globals');
const subtract = require('./subtract');

test('difference of two numbers', () => {
  expect(subtract(1, 2)).toBe(1);
});
