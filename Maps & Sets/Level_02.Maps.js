/* Maps */

//Count frequency of string
let string = "kartikeya";
let map = new Map();

for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (!map.has(char)) {
        map.set(char, 1);
    } else {
        map.set(char, map.get(char) + 1);
    }
}

console.log(map);

//Count frequencies of word
let sentence = " JavaScript is very easy";
let Mapp = new Map();

let arr = sentence.split(" ");
for (const iterator of arr) {
    if (!Mapp.has(iterator)) {
        Mapp.set(iterator, 1);
    } else {
        Mapp.set(iterator, Mapp.get(iterator) + 1);
        repeatedArray.push(iterator);
    }
}

console.log(Mapp);

//Count frequency of Array and find duplicates in an Array
let array = [2, 4, 9, 4, 5, 9, 9, 2, 7, 8, 9, 9];
let myMap = new Map();
let repeatedArray = [];

for (const iterator of array) {
    if (!myMap.has(iterator)) {
        myMap.set(iterator, 1);
    } else {
        myMap.set(iterator, myMap.get(iterator) + 1);
        repeatedArray.push(iterator);
    }
}

//Make a map where array keys are elements and values are element's square
let num = [2, 3, 4, 5, 6, 7, 8];
let newMap = new Map();

for (const iterator of num) {
    newMap.set(iterator, iterator * iterator)
}

console.log(newMap);

//Remove duplicates from an Array and find first repeating element
let numArray = [2, 4, 5, 6, 6, 7, 2, 9, 3, 4];
let numMap = new Map();

for (const iterator of numArray) {
    if (!numMap.has(iterator)) {
        numMap.set(iterator, 1);
    } else {
        console.log(`First repeated element is ${iterator}`);
        // break;
    }
}

console.log(Array.from(numMap.keys()));

//Group Numbers by Even and Odd
let evenArr = [];
let oddArr = [];
for (const iterator of numArray) {
    if (iterator % 2 == 0) {
        evenArr.push(iterator);
    } else if (iterator % 2 == 1) {
        oddArr.push(iterator);
    }
}

numMap.set("even", evenArr).set("odd", oddArr);
console.log(numMap);