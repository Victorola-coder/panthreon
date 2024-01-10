const calculator = require('./calculator');

test('should calculate the arithmetic of two inputs data correctly', () => {
  const result = calculator(2, 4, '*');
  expect(result).toBe(8);
});
