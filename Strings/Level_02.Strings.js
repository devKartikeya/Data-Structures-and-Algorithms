//Count words in a string
let sentence = "Javascript is a very weekly typed language";
let count = 1;

for (const iterator of sentence) {
    if (iterator == " ") count++;
}

console.log(count);

//Sum of all ASCII values of a string
let string = "Aaaaa";
let sum = 0;
let ascii = 0;

for (let i = 0; i < string.length; i++) {
    ascii = string.charCodeAt(i);
    sum = sum + ascii;
}

console.log(sum);

//Check whether a string starts and ends with same character
let word = "anvesha";

if (word.charAt(0) === word.charAt(word.length - 1)) console.log(`String starts and ends with same character`)

else console.log(`String does not starts and ends with same character`);

//Count uppercase and lowercase letters
let name = "Kartikeya Mishra is Very Good boy";
let uc = 0;
let lc = 0;
for (let i = 0; i < name.length; i++) {
    ascii = name.charCodeAt(i);
    if (ascii >= 65 && ascii < 97) uc++
        else if (ascii >= 97 && ascii <= 122) lc++
}

console.log(uc, lc);

//Check if a string contains only unique characters
let str = "unique";

function checkUniqueness(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] == str[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkUniqueness(str));