/*"use strict";

const query = "this day 2day";
const separation = query.split('');
console.log(separation, separation.length);

let counter = 0;
for (let i = 0; i < (separation.length); i++) {
    if (i = " ") counter = counter + 1;
}
console.log(counter);*/

function countWords(text) {
    let wordCount = 0;
    let isWord = false;

    // Loop through each character in the string
    for (let i = 0; i < text.length; i++) {
        // Check if the current character is a letter or number
        if (text[i] !== ' ' && text[i] !== '\n' && text[i] !== '\t') {
            // If we're not already inside a word, count it as a new word
            if (!isWord) {
                wordCount++;
                isWord = true;
            }
        } else {
            // If the current character is a space (or similar), we're no longer in a word
            isWord = false;
        }
    }

    return wordCount;
}

// Example usage:
let sampleText = ``;
let wordCount = countWords(sampleText);

console.log("Word count:", wordCount);
