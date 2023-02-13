/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
	let result = 0;

	while (low <= high) {
		if (low % 2 === 1) {
			++result;
		}

		++low;
	}

	return result;
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
	let result = 0;

	while (low <= high) {
		if ((low & 1) !== 0) {
			++result;
		}

		++low;
	}

	return result;
};
