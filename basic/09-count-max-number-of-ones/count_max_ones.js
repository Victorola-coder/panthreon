

function count_max_ones(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 1) {
            //increment count
            ++count;

            //max holds the max number of ones visited yet.
            max = Math.max(count, max);

        } else {
            //reset count to zero.
            count = 0;
        }

    }
    return max;
}


module.exports = count_max_ones;
