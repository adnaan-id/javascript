/* this code prints the numbers from 1-100, with Fizz instead of multiples of 3, Buzz instead of multiples of 5 and FizzBuzz for multiples of both */

const X3 = "Fizz";
const X5 = "Buzz";
const X3X5 = "FizzBuzz";
function fizzBuzz (mult3, mult5, both) {
	const arr = [];
	for (let i = 1; i <= 100; i++) {
		arr.push(i);
	}
	for (let i = 0; i < arr.length; i++) {
		const by3 = arr[i] % 3;
		const by5 = arr[i] % 5;
		const by3by5 = arr[i] % 3 && arr[i] % 5;

		if (by3 === 0 && by5 === 0) {
                        arr.splice(i, 1);
                        arr.splice(i, 0, both);
                } else if (by3 === 0) {
			arr.splice(i, 1);
			arr.splice(i, 0, mult3);
		} else if (by5 === 0) {
			arr.splice(i, 1);
			arr.splice(i, 0, mult5);
		}
	}
	console.log(arr);
	return;
}
fizzBuzz(X3, X5, X3X5);

/* This code is a palindrome checker */

function _Palindrome(string) {
	const splits = string.toLowerCase();
	const lCase = splits.split("")
	const forward = lCase.reverse().join("");
	console.log(forward === splits);
	return;
}
_Palindrome("mallam");
