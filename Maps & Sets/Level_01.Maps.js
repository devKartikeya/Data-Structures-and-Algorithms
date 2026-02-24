/* Objects */

//Sum of all values of an Object
let marks = {
    maths: 77,
    physics: 78,
    chemistry: 82,
    english: 94,
    computer: 98
}

let sum = 0;
for (const key in marks) {
    sum += marks[key];
}

console.log(sum);

let obj = { a: 67, b: 78, c: 91, d: 55 }

//Find highest value in an Object
let max = Object.values(obj)[0];
for (const key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
}

console.log(max);

//Delete a prperty from an Object
let property = "a";
let newObj = {};
for (const key in obj) {
    if (key !== "a") {
        newObj[key] = obj[key];
    }
}

console.log(newObj);

//Invert Values and Keys in an Object
let invertObj = {};
for (const key in obj) {
    invertObj[obj[key]] = key;
}

console.log(invertObj);