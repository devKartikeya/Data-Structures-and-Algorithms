//Union of two arrays
let arr1 = [2, 4, 4, 6, 8, 10, 7, 8, 10, 30, 50, 30];
let arr2 = [2, 7, 8, 99, 1, 34, 56, 67, 78];

let intersection = [];
let union = [...new Set([...arr1, ...arr2])];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]))
        intersection.push(arr1[i]);
}

console.log(`Union of arrays is ${union}`);
console.log(`Intersection of two arrays is ${intersection}`);

//Find all pairs iwth a given sum
let array = [2, 4, 18, 6, 16, 4, 15, 19, 5, 3];
let sum = 20;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] + array[j] == sum)
            console.log(array[i], array[j]);
    }
}