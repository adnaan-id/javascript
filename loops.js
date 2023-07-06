'use strict';

/* this code computes total reps if I were to do pushups 20x, then 19x, all down to 1*/

let sum = 0;
for(let i = 20; i >= 1; i--) {
	sum = sum + i;
	if (i === 1) {
		console.log(sum);
	}
}

/* this code multiplies numbers by 2 until 8, then by 3 until 24, then by 4 until 384*/

let no = 2;
let ans = [8, 24, 384];
let mult = 2;

for (let i = no; i <= (ans.length) + 1000; i *= mult) {
	no *= mult;

	/* why doesn't this code show a 6 on the console? because the increment is i *= mult = 2 && since i = no, && no *= mult, 2nd iteration of i will then become 4 instead of 3 */
	if (i === 2) continue; /* this is to prevent showing 4 on the console */
	console.log(no);
	if (no === ans[0]) {
		mult = 3;
	} else if (no === ans[1]) {
		mult = 4;
	}
	if (no === 384) break;
}
