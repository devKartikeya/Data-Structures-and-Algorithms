/* Binary Search */

let array = [2, 1, 34, 5, 67, 2002, 93, 45, 8, 2, 3, 12, 21];
let element = 2002;

function binarySearch(array, element) {
    let start = 0;
    let end = 0;
    let mid = (start + end) / 2;

    for (let index = mid; index < array.length; index++) {
        if (array[index] == element) {
            return index;
        } else if (element > array[index]) {
            start = mid + 1;
        } else if (element < array[index]) {
            end = mid - 1;
        }
    }
}

console.log(binarySearch(array, element));