"use strict";

/* this code computes total reps if I were to do pushups 20x, then 19x, all down to 1*/

const repsCap = 20;
function repsCounter(reps) {
	let sum = 0;
	for (let i = reps; i >= 1; i--) {
		sum += i;
	}
	console.log(sum);
	return;
}
repsCounter(repsCap);

/* this code multiplies numbers by 2 until 8, then by 3 until 24, then by 4 until 384*/

let no = 2;
let ans = [8, 24, 384];
let mult = 2;

function multiplier(origin, limits, multipliers) {
	for (let i = origin; i <= limits.length + 1000; i *= multipliers) {
		origin *= multipliers;
// why doesn't this code show a 6 on the console? because the increment is i *= mult = 2 && since i = no, && no *= mult, 2nd iteration of i will then become 4 instead of 3
		if (i === 2) continue; // this is to prevent showing 4 on the console
		console.log(origin);
		if (origin === limits[0]) {
			multipliers++;
		} else if (origin === limits[1]) {
			multipliers++;
		}
		if (origin === 384) break;
	}
	return;
}
multiplier(no, ans, mult);

/* this piece of code adds up the numbers in an array */

const numArray = [1, 2, 11, 54, 2, 4, 6, 8, 10, 112, 111];

function addUpElements(array) {
	let arraySum = 0;
	for (let i = 0; i < array.length; i++) {
		arraySum += array[i];
		//if (i === array.length - 1) { 
		////array.length - 1 means the last value in this array. The if block ensures only the final value is computed
		//console.log(arraySum);}
		}
	console.log(arraySum);
	return;
}
addUpElements(numArray);

/* now to find the max value in above array */
/* **************************************** */
function maxFinder(array) {
	let maxNum = Math.max(...numArray);
	console.log(`the max number is ${maxNum}`);
	return;
}
maxFinder(numArray);

// this does the same as above but it is buggy. I will fix with time.
function maxFinder2(array) {
	let max = 0;
	for (let i = 0; i < numArray.length; i++) {
		if (i === (numArray.length - 1)) {
			max = numArray[i];
			console.log(`the max number is ${max}`);
		}
	}
	return;
}
maxFinder2(numArray);

/* this code reverses a string */

let str = 'Perfect Introduction';

function reversion(string) {
	let reverse = [];
	let answer;
	const parts = string.split("");

	for (let i = parts.length - 1; i >= 0; i--) {
		reverse.push(parts[i]);
		answer = reverse.join("");
	}
	console.log(answer)
	return;
}
const call = reversion(str);

/* this code calculates the average of the numbers in the above array, numArray */

function calcAverage(array) {
	let total = 0;
	let average = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	average = total / array.length;
	console.log(average);
	return;
}
calcAverage(numArray);

/* this code checks the number of vowels in the str variable above. */

function checkVowels(string) {
	let vowelCount = 0;
	const splitString = string.split("");
	for (let i = 0; i < splitString.length; i++) {
		if (splitString[i] == 'a' || splitString[i] == 'e' || splitString[i] == 'i' || splitString[i] == 'o'|| splitString[i] == 'u') {
			vowelCount += 1;
		} else if (splitString[i] == 'A' || splitString[i] == 'E' || splitString[i] == 'I' || splitString[i] == 'O' || splitString[i] == 'U') {
			vowelCount += 1;
		}
	}
	console.log(`there are ${vowelCount} vowels in passed string`);
	return vowelCount;
}
checkVowels(str);

/* this code checks if a number is even or odd */

function checker(number) {
	const even = true;
	const odd = false;
	if (number % 2 === 0) {
		console.log(even);
	} else {
		console.log(odd);
	}
	return;
}
checker(numArray[0]);

/* this code capitalizes the first words in a string */
/* ************************************************* */

const strToPass = "perfect introduction";

function capitalizer(string) {
	const capitalized = [];
	const separator = string.split(" ");
	for (let i = 0; i < separator.length; i++) {
		const word = separator[i];
		const capWord = word.charAt(0).toUpperCase( ) + word.slice(1);
		capitalized.push(capWord);
	}
	const joinedWord = capitalized.join(" ");
	console.log(joinedWord);
	return;
}
capitalizer(strToPass);

/*function capitalizer(string) {
	const separator = string.split("");
	const element1 = separator.shift( ); // this removes the first element.
	separator.unshift(element1.toUpperCase( )); // this replaces the first lmnt with an uppercase letter.

// below code should capitalize any element after a space but it is buggy

	let $Space = " ";
	for (let i = 0; i < separator.length; i++) {
		if (separator[i] === $Space) {
			const nextElement = separator[i + 1];
		}
	}
	console.log(separator);
	return;
}
capitalizer("perfect introduction");*/

/* this code checks the equality of two arrays, including the order their elements are at */

function equalizer(array1, array2) {
	let a;
	let b;
	for (let i = 0; i < array1.length; i++) {
		a = array1[i];
	}
	for (let i = 0; i < array2.length; i++) {
		b = array2[i];
	}
	if (a.length === b.length && a === b) {
		console.log(true);
	} else {
		console.log(false);
	}
	return;
}
equalizer([1, 2, 2], [1, 2, 2]);
