// MERGESORT CHALLENGE

// Build a function mergeSort that takes in an array and returns a
// sorted array, using a recursive merge sort methodology. An input of
// [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

// --------------------------------------------------------------------

function mergeSort(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return [];
    } else if (Array.isArray(list) && list.length === 1) {
        return list;
    }

    let arr1 = mergeSort(list.slice(0, (list.length / 2)));
    let arr2 = mergeSort(list.slice((list.length / 2), list.length));
    let arr3 = [];

    // Compare values between arrays.
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            arr3.push(arr1.shift());
        } else {
            arr3.push(arr2.shift());
        }
    }

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            arr3.push(arr1.shift());
        } else if (arr2.length > 0) {
            arr3.push(arr2.shift());
        }
    }

    return arr3;
}

let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];
let array3 = [105, 79, 100, 110, 89];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));