const intersection_of_two_sorted_arrays = require("./intersection-of-two-sorted-array");

const arr1 = [0, 3, 5, 6, 8, 11, 13, 14, 15, 19];
const arr2 = [0,1, 3, 8, 13, 19];

console.log(`The intersection of arr1: ${JSON.stringify(arr1)} and arr2: ${JSON.stringify(arr2)} is: `, intersection_of_two_sorted_arrays(arr1, arr2));