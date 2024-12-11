

function union_of_two_sorted_array(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;

    let i = 0;
    let j = 0;

    let union = [];

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            //push to the union array if it is empty or if the last element in the array is not equal to the arr1[i]
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            //increment the variable i, if the arr1[i] is pushed to the union array or not.
            ++i;
        }
        else if (arr2[j] < arr1[i]) {
            //push to the union array if it is empty or if the last element in the array is not equal to the arr2[j]
            if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            //increment the variable i, if the arr1[i] is pushed to the union array or not.
            ++j;
        }
        else {
            //push the arr1[i] or arr2[j] and increment the corresponding variable i or j , since either arr1[1] or arr2[j] are equal.
            union.push(arr1[i])
            ++i;
        }
    }


    //runs while there is still element in arr1.
    while (i < m) {
        if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i])
        }
        ++i;
    }

    //runs while there is still element in arr2.
    while (j < n) {
        if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j])
        }
        ++j;
    }

    return union;
}

module.exports = union_of_two_sorted_array
