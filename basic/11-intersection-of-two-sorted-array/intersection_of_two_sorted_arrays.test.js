const intersection_of_two_sorted_arrays = require("./intersection-of-two-sorted-array");

const arr1 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8];
const arr2 = [2, 4, 5, 7, 8];

const intersection = [2, 4, 5, 7, 8];

describe("get the intersection of two sorted array", () => {
    it(`get the union of arr1: ${JSON.stringify(arr1)} and arr2:${JSON.stringify(arr2)}`, () => {
        expect(intersection_of_two_sorted_arrays(arr1,arr2)).toEqual(intersection);
    })
})