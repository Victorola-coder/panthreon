const moveArrDplaces = require("./move_array_d_places");

const testArr = [1, 2, 3, 4, 5, 6]
const arrMoved1place = [2, 3, 4, 5, 6, 1]
const arrMoved2place = [3, 4, 5, 6, 1, 2]
const arrMoved3place = [4, 5, 6, 1, 2, 3]
const arrMoved4place = [5, 6, 1, 2, 3, 4]
const arrMoved5place = [6, 1, 2, 3, 4, 5]
const arrMoved6place = [1, 2, 3, 4, 5, 6]

describe('to move an array d-places', () => {
    it("to move array 1 place", () => {
        expect(moveArrDplaces(testArr, 1)).toEqual(arrMoved1place);
    })

    it("to move array 2 place", () => {
        expect(moveArrDplaces(testArr, 2)).toEqual(arrMoved2place);
    })

    it("to move array 3 place", () => {
        expect(moveArrDplaces(testArr, 3)).toEqual(arrMoved3place);
    })

    it("to move array 4 place", () => {
        expect(moveArrDplaces(testArr, 4)).toEqual(arrMoved4place);
    })

    it("to move array 5 place", () => {
        expect(moveArrDplaces(testArr, 5)).toEqual(arrMoved5place);
    })

    it("to move array 6 place", () => {
        expect(moveArrDplaces(testArr, 6)).toEqual(arrMoved6place);
    })
})
