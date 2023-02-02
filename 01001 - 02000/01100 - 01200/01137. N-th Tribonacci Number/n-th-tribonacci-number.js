/* =========================================================
=       Solution 1. bottom-top dp iteration: O(n)          =
========================================================= */

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
	if (n === 0) {
		return 0;
	}

	if (n === 1 || n === 2) {
		return 1;
	}

	// base case
	let dpPrevFirst = 0;
	let dpPrevSecond = 1;
	let dpPrevThird = 1;

	for (let i = 3; i <= n; ++i) {
		[dpPrevFirst, dpPrevSecond, dpPrevThird] = [
			dpPrevSecond,
			dpPrevThird,
			dpPrevFirst + dpPrevSecond + dpPrevThird,
		];
	}

	return dpPrevThird;
};
