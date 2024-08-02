const move_zeros_to_end = require("./move_zeros_to_end");
const arr1 = [1, 2, 0, 0, 3, 4, 5, 6, 7, 8, 0, 0, 15, 12, 13, 0, 3, 4];
const arr2 = [0, 0, 1, 2, 3];
const arr3 = [1, 3, 7, 9, 0, 0, 0]
const arr4 = [11, 3, 44, 2, 5, 7]
const test1 = [1, 3, 7, 9, 0, 0, 0];
const test2 = [1, 2, 3, 0, 0];
const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 15, 12, 13, 3, 4, 0, 0, 0, 0, 0]
describe("move zeros in a dataset to the end", () => {
    test("move zero(s) to the end", () => {
        expect(move_zeros_to_end(arr1)).toEqual(test3);
        expect(move_zeros_to_end(arr2)).toEqual(test2);
        expect(move_zeros_to_end(arr3)).toEqual(test1);
    })
    test("return the intial array, since it contain no zero digit", () => {
        expect(move_zeros_to_end(arr4)).toEqual(arr4);
    })
})