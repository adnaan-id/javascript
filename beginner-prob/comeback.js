"use strict";

/*sum of numbers*/

function total(number) {
	let sum = 0;

	for (let i = 1; i <= number; i++) {
		sum += i;
	}
	return sum;
}

const functionCall = total(5);
console.log(functionCall);
