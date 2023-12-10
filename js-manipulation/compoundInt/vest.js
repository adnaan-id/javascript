'use strict';

/*
 * An investor wants to invest a base amount of money for the first month, 
 * then an additional salary every month for as long as specified, 
 * while still reinvesting each profit earned every month, 
 * all at a fixed rate of 15% per month.
 */

function vest (timeInMonths, salary) {

	let base = 100000;
	let profit = (15 / 100) * base;
	let newCapital = base + profit;
	let rawBase = 100000;
	for (let i = 1; i <= timeInMonths; i++){
		rawBase += salary;
		base += salary + profit;
		newCapital += salary;
		profit = (15 / 100) * newCapital;
		newCapital += profit;
	}
	const results = {
		"Profit": profit,
		"Raw Base": rawBase,
		"Base": base,
		"New Capital": newCapital
	};
	return results;
}

const mCap = vest(60, 120000);
console.log(mCap);
