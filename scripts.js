"use strict";

/* this code computes total reps if I were to do pushups 20x, then 19x, all down to 1*/

let sum = 0;
for (let i = 20; i >= 1; i--) {
  sum += i;
  if (i === 1) {
    console.log(sum);
  }
}

/* this code multiplies numbers by 2 until 8, then by 3 until 24, then by 4 until 384*/

let no = 2;
let ans = [8, 24, 384];
let mult = 2;

for (let i = no; i <= ans.length + 1000; i *= mult) {
  no *= mult;

  /* why doesn't this code show a 6 on the console? because the increment is i *= mult = 2 && since i = no, && no *= mult, 2nd iteration of i will then become 4 instead of 3 */
  if (i === 2) continue; /* this is to prevent showing 4 on the console */
  console.log(no);
  if (no === ans[0]) {
    mult++;
  } else if (no === ans[1]) {
    mult++;
  }
  if (no === 384) break;
}


/* this piece of code adds up the numbers in an array */

const numArray = [1, 2, 11, 54, 2, 4, 6, 8, 10, 112, 111];
let arraySum = 0;
for (let i = 0; i < numArray.length; i++) {
	arraySum += numArray[i];
	if (i === numArray.length - 1) { /* numArray.length - 1 means the last value in this array. The if block ensures only the final value is computed */
	console.log(arraySum);
	}
}

/* now to find the max value in above array */

let maxNum = Math.max(...numArray);
console.log(maxNum);

/* this does the same as above but it is buggy. I will fix with time */
let max = 0;
for (let i = 0; i < numArray.length; i++) {
	if (i === (numArray.length - 1)) {
		max = numArray[i];
		console.log(`the max number is ${max}`);
	}
}

/*
let str = 'Perfect Introduction';
let reverse;
function reversion(string) {
	const parts = string.split("");
	for (let i = parts.length - 1; i >= 0; i--) {
		const answer = reverse.push(parts[i]);
	}
	return reverse;
}
const call = reversion(str);
*/