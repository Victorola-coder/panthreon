const count_max_ones = require("./count_max_ones");

const arr1 = [1, 1, 0, 0, 1, 1, 1];
const arr2 = [1, 1, 1, 1, 0, 0, 1, 1];
const arr3 = [1, 1, 1, 1, 1, 1, 0, 0, 1, 1];
const arr4 = [1, 1, 0, 0, 0, 1];

describe("count maximun ones in an array", () => {
    it("maximum numbero of ones should be 1", () => {
        expect(count_max_ones(arr1)).toBe(3);
    })
    it("maximum number of ones should be 4", () => {
        expect(count_max_ones(arr2)).toBe(4);
    })
    it("maximum number of ones should be 6", () => {
        expect(count_max_ones(arr3)).toBe(6);
    })
    it("maximum number of ones should be 2", ()=>{
        expect(count_max_ones(arr4)).toBe(2);
    })
})