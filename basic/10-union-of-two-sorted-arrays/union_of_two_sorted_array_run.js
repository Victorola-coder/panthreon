const union_of_two_sorted_array = require("./union_of_two_sorted_array");

const testArr1 = [[1, 3, 5, 7, 9, 11], [0, 2, 4, 6, 8, 10]];
const testArr2 = [[13, 15, 17, 19, 21, 23, 27, 29], [12, 14, 16, 18, 20, 25, 26, 30]]


console.log(`the union of testArr1: ${JSON.stringify(testArr1)} is: `, union_of_two_sorted_array(testArr1[0], testArr1[1]));
console.log(`the union of testArr2: ${JSON.stringify(testArr2)} is: `, union_of_two_sorted_array(testArr2[0], testArr2[1]));
