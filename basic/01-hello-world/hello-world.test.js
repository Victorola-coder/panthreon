const helloWorld = require('./helloWorld');

test(`Returning 'Hello World' as a string`, () => {
  const result = helloWorld();
  expect(result).toBe('Hello world!');
});
