const calculator = require('./calculator');

test('should calculate the arithmetic of two inputs data correctly', () => {
  const num1 = 7;
  const num2 = 2;

  //   addition fx
  expect(calculator(num1, num2, '+')).toBe(9);

  // subtraction fx
  expect(calculator(num1, num2, '-')).toBe(5);

  // multiplication fx

  expect(calculator(num1, num2, '*')).toBe(14);

  //   division fx

  expect(calculator(num1, num2, '/')).toBeCloseTo(3.5);
});
