const findMaxNunber = require('./find-max');

test('should log the highest number in the array ', () => {
  expect(findMaxNunber([1, 2, 3, 4, 5, 6, 7, 8, 88, 100])).toBe(100);
});
