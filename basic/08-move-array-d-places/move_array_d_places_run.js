const moveArrDplaces = require("./move_array_d_places");

let arr = [1, 2, 3, 4, 5, 6]
let n = arr.length;

for (let i = 0 + 1; i < n; ++i) {
    //moving the array d-places.
    let d = i;
    console.log(`The arr ${JSON.stringify(arr)} moved ${d}-place is: ${JSON.stringify(moveArrDplaces(arr, d))}`);
}
