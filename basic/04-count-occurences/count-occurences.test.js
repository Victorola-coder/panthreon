const countOccurrences = require('./count-occurences');

test('should check through input  string and check the count of the number of character in the string', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('Victoria', 'e')).toBe(0);
  expect(countOccurrences('bless up', 'u')).toBe(1);
});
