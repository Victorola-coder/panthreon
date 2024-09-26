
function moveArrDplaces(arr, d) {
    //clone the arr, so the original array is not mutated.
    let clone = arr.slice();

    let n = clone.length;

    //makes the d value to be in the range of 0 to (arr.length - 1). 
    d = d % n;

    //if the array is moved d-place equal to arr.length, then the array is unchanged. 
    if (d === clone.length) return clone;

    let temp = []

    //inserting the element to be moved d-places into the temp array.
    for (let i = 0; i < d; ++i) {
        temp.push(clone[i]);
    }

    //moving the rest elements d-places to the left.
    for (let j = d; j < n; ++j) {
        clone[j - d] = clone[j];
    }

    //the index to start the insertion of the elements into the clone array.
    let m = n - d;

    for (let k = 0; k < temp.length; ++k) {
        clone[m++] = temp[k];
    }

    return clone;
}


module.exports = moveArrDplaces;