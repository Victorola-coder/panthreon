const numbers = [1, -1, 2, -2, 3, 4];

// filter only the positive numbers

const filteredPositive = numbers.filter((num) => num >= 0);

console.log(filteredPositive);

// filter only  the negative numbers

const filteredNegative = numbers.filter((num) => {
  return num <= 0;
});

console.log(filteredNegative);
