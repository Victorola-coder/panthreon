const reverseANumber = require("./reverse_a_number");
let testNum = 4378689736
describe("reverse a number passed to the reverseANumber function", ()=>{
    test("should return the reverse of a number", ()=>{
        expect(reverseANumber(testNum)).toBe(6379868734);
    })
})