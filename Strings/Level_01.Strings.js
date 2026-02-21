//Check Palindrome
let str = "NITIN";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    let c = str.charAt(i);
    rev = rev + c;
}

if (rev == str) console.log(`Palindrome`);
else console.log(`Not Palindrome`);

//Count vowels in a string
let mystr = "hello world";
let vcount = 0;

for (let i = 0; i < mystr.length; i++) {
    let c = mystr.toLowerCase().charAt(i);
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") vcount++;
}

console.log(`Vowels count is ${vcount}`);

//Find longest string
let sentence = "I love javascript deeply";
let sentenceArray = sentence.split(" ");

let max_string = sentenceArray[0];

for (let i = 1; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > sentenceArray[i - 1].length) {
        max_string = sentenceArray[i];
    }
}

console.log(max_string);

//Count digits in a string
let regex = /^\d+$/;
let string = "Kart3ik4e2ya";
let dcount = 0;

for (const iterator of string) {
    if (regex.test(iterator)) dcount++;
}

console.log(`Digits count in string is ${dcount}`);

//Covert Lowerrcase to Uppercase
let lowerCaseString = "kArtiKeya_mIsHrA";
let upperCaseString = "";

for (let i = 0; i < lowerCaseString.length; i++) {
    let charCode = lowerCaseString.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
        upperCaseString = upperCaseString + String.fromCharCode(charCode - 32);
    } else if (charCode >= 65 && charCode < 97) {
        upperCaseString = upperCaseString + String.fromCharCode(charCode + 32);
    }
}

console.log(upperCaseString);

//Check equality of two strings manually
let firstString = "Amana";
let secondString = "Amana";

function checkEquality(firstString, secondString) {
    if (firstString.length !== secondString.length) {
        return false;
    }
    for (let i = 0; i < firstString.length; i++) {
        if (firstString.charAt(i) !== secondString[i]) {
            return false;
        }
    }
    return true;
}
console.log(checkEquality(firstString, secondString));

//Remove duplicates from a string
let duplicatedString = "programming";
let duplicatedArray = duplicatedString.split('');

let mySet = new Set(duplicatedArray);
let uniqueString = [...mySet].join('');

console.log(uniqueString);

// Capitialize first letter of each word
let uncapitializedString = " my name is kartikeya mishra";
let capitializedString = "";

for (let i = 0; i < uncapitializedString.length; i++) {
    let char = uncapitializedString.charAt(i);
    if (char == " ") {
        capitializedString += " " + uncapitializedString[i + 1].toUpperCase();
        i = i + 1;
    } else {
        capitializedString += uncapitializedString[i];
    }
}

console.log(capitializedString.trim());

// Remove all occurences of a character from a string
let strg = "anvesha";
let charToRemove = "a";
let newStrg = "";

for (let i = 0; i < strg.length; i++) {
    if (strg[i] == charToRemove) {
        newStrg = strg.slice(0, i) + strg.slice(i + 1);
    }
}

console.log(newStrg);