/* Sets */

//Remove duplicates from an Array and count unique elements
let array = [2, 4, 8, 9, 9, 0];
console.log([...new Set(array)], [...new Set(array)].length);

//Check if an array has duplicates
if ([...new Set(array)].length < array.length) {
    console.log(`Array is not Unique`);
    console.log([...new Set(array)].length);
} else {
    console.log(`Array is Unique`);
    console.log([...new Set(array)].length);
}

//Convert string to unique characters
let string = "banana";
console.log(new Set(string));

//Check whether a string has duplicate elements
if (new Set(string).size < string.length) {
    console.log('String is not Unique');
} else {
    console.log(`String is Unique`);
}

//Find first repeating element in an Array
let arr = ["e", "b", "c", "a", "d", "d"];
let mySet = new Set();

for (const iterator of arr) {
    if (!mySet.has(iterator)) {
        mySet.add(iterator);
    } else if (mySet.has(iterator)) {
        console.log(iterator);
        break;
    }
}

//Find the difference between two Arrays
let set1 = new Set([1, 3, 2, 4]);
let set2 = new Set([1, 2]);
let set3 = new Set();

for (const iterator of set1) {
    if (!set2.has(iterator)) {
        set3.add(iterator)
    }
}

console.log([...set3]);

//Find Union of two Arrays
let Union = [...new Set([...new Set([2, 4, 6, 8, 8, 9]),
    ...new Set([2, 4, 5, 5, 6, 10, 18])
])];

console.log(Union);

//Find the Intersection of two Arrays
let setFirst = new Set([2, 4, 5, 6, 7, 8]);
let setSecond = new Set([2, 4, 6, 10, 12, 3]);
let setThird = new Set();

for (const iterator of setFirst) {
    if (setSecond.has(iterator)) {
        setThird.add(iterator);
    }
}

console.log([...setThird]);