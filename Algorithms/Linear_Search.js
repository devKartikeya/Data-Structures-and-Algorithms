/*Linear Search*/

let array = [2, 1, 34, 5, 67, 2002, 93, 45, 8, 2, 3, 12, 21];
let element = 45;

function linearSearch(array, element) {
    for (let index = 0; index < array.length; index++) {
        if (element == array[index]) {
            return index;
        }
    }
}

console.log(linearSearch(array, element));