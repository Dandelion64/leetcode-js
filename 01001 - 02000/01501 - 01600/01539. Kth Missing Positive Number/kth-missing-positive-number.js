/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
	const length = arr.length + k;
	let missingCount = 0;

	for (let i = 1; i <= length; ++i) {
		if (arr.indexOf(i) === -1) {
			++missingCount;
		}

		if (missingCount === k) {
			return i;
		}
	}

	return missingCount;
};

/* =========================================================
=       Solution 2. binary search [,): O(log n)            =
========================================================= */

// if there are no missing positive integers in this array
// arr[i] should be equal to i + 1

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
    let left = 0, right = arr.length, mid;

    while (left < right) {
        mid = (left + right) >>> 1;

        if (arr[mid] - 1 < mid + k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left + k;
};
