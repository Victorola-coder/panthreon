const getSum = require('./get-sum');

test('should return the sum of two numbers', () => {
  const num1 = 1;
  const num2 = 2;

  const result = getSum(num1, num2);
  expect(result).toBe(3);
});
