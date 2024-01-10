const getSum = require('./get-sum');

test('should return the sum of two numbers', () => {
  const result = getSum(1, 2);
  expect(result).toBe(3);
});
