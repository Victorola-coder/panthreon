
function intersection_of_two_sorted_array(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    let i = 0;
    let j = 0;

    let intersection = [];

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            //increment the variable i since arr1[i] is smaller, since only bigger values can be found moving toward the right of the arr1
            ++i
        } else if (arr2[j] < arr1[i]) {
            //increment the variable j since arr2[j] is smaller, since only bigger values can be found moving toward the right of the arr2.
            ++j
        } else {
            //add to the intersection array either of the arr1[i] or arr2[j] element and increment both pointers.
            intersection.push(arr1[i]);
            ++i;
            ++j;
        }
    }

    return intersection;
}

module.exports = intersection_of_two_sorted_array
