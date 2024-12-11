const union_of_two_sorted_array = require("./union_of_two_sorted_array");

const arr1 = [1, 3, 5, 7, 9, 11];
const arr2 = [0, 2, 4, 6, 8, 10];
const arr3 = [13, 15, 17, 19, 21, 23, 27, 29];
const arr4 = [12, 14, 16, 18, 20, 25, 26, 30];

const union1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const union2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 29, 30]
describe("should get the union of two array", () => {
    it(`get the union of arr1: ${JSON.stringify(arr1)} and arr2: ${JSON.stringify(arr2)}`, () => {
        expect(union_of_two_sorted_array(arr1, arr2)).toEqual(union1);
    })
    it(`get the union of arr1: ${JSON.stringify(arr2)} and arr2: ${JSON.stringify(arr2)}`, () => {
        expect(union_of_two_sorted_array(arr3, arr4)).toEqual(union2);
    })
})