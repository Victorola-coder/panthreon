const count_max_ones = require("./count_max_ones");

const testArr = [
    [1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1]
]

testArr.forEach(arr => {
    console.log(`max number of ones in the array: ${JSON.stringify(arr)} -> `, count_max_ones(arr));
})