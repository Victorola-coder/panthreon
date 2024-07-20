const numbers = [1, -1, 2, -2, 3, 4];

// NOTE things happening behind the scene - add the acc value to to the value

// lets shorten acc = a and cur = c
// a = 0, c = 1 => a = 1
// a = 1, c = 0 => a = 0
//  a = 0, c = 2 => 1 a= 0

// the first four values on the array will yield 0 so we can add the last two  and get 7

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);

// acc = accumulator
// cur = current value
