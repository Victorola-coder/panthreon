const numbers = [1, -1, 2, -2, 3, 4];

// filter only the positive numbers

const filteredPositive = numbers.filter((num) => {
  return num >= 0;
});
// console.log(filteredPositive)

// here we are using the same results from the array we filtered and map through it to display a list item
// NOTE filter and map method doesn't override the initial array
const items = filteredPositive.map((item) => `<li> ${item} </li>`).join("");

// console.log(items);

// WITH OBJECTS
const objects = filteredPositive.map((value) => ({ value }));
console.log(objects);
