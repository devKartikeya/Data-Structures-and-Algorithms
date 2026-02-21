// Starting the DSA

//Sum and Product of elements of array 
let arr = [2, 1, 3, 4, 100, 194, 5, 67];
let sum = 0;
let product = 1;

arr.forEach(element => {
    sum = sum + element;
    product = product * element;
});

console.log(`Sum is ${sum} and product is ${product}`);

// Find Maximum Number in an Array
let array = [3, 7, 2, 9, 1000, 5, 900, 500];
let MAX = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > MAX) MAX = array[i];
}

console.log(`Maximum value in arr is ${MAX}`);

//Count even numbers in an array
let evenArray = [2, 7, 8, 99, 1, 34, 56, 67, 78];
let count = 0;

for (const iterator of evenArray) {
    if (iterator % 2 === 0) count++;
}

console.log(`Number of even numbers in array is ${count}`);

//Reversing an Array
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
    reverseArray.push(originalArray[i])
}

console.log(reverseArray);

//Check array is sorted or not
let unsortedArray = [2, 4, 6, 9, 56, 78];

function checkSort(unsortedArray) {
    for (let i = 1; i < unsortedArray.length; i++) {
        if (unsortedArray[i] < unsortedArray[i - 1]) {
            console.log(`Array is unsorted`);
            return;
        }
    }
    console.log(`Array is sorted`);
}

checkSort(unsortedArray);

//Remove duplicates from array
let sortedArray = [2, 4, 4, 6, 8, 10, 8, 10, 30, 50, 30];
let uniqueArray = [];

sortedArray.forEach(element => {
    if (!uniqueArray.includes(element)) uniqueArray.push(element);
});

console.log(uniqueArray);

//Move all zeroes to the end
let arrayWithZeroes = [2, 0, 5, 0, 9, 8, 0, 0, 5, 7, 0];

for (let i = 0; i < arrayWithZeroes.length; i++) {
    const element = arrayWithZeroes[i];
    if (element == 0) {
        let item = arrayWithZeroes.splice(i, 1);
        arrayWithZeroes.push(item[0]);
    }
}

console.log(arrayWithZeroes);
