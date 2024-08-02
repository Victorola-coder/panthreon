

function move_zeros_to_end(arr) {
    //get the first zero in the array.
    let k = -1;
    let N = arr.length;
    let zero = 0;
    for (let i = 0; i < N; ++i) {
        if (arr[i] === zero) {
            k = i;
            //exit from the loop.
            break;
        }
    }
    for (let j = k + 1; j < N; ++j) {
        if (k === -1) return arr;
        //look for a non-zero number.
        if (arr[j] !== zero) {
            swap(arr, j, k);
            ++k;
        }
    }
    return arr;
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

module.exports = move_zeros_to_end;