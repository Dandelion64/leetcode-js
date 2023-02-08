/* =========================================================
=       Solution 1. binary search <[,]>: O(n log m)        =
========================================================= */

/**
 * @param {number[]} weights
 * @param {number} D
 * @param {number} x
 * @return {number}
 */
const couldShipThemAll = (weights, D, x) => {
	let days = 0;

	for (let i = 0; i < weights.length;) {
		let cap = x;

        while (i < weights.length) {
            if (cap < weights[i]) {
                break;
            } else {
                cap -= weights[i];
                ++i;
            }
        }

        ++days;
	}

	return days <= D;
};

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = (weights, days) => {
	let left = 0, right = 1, mid;

	for (let i = 0; i < weights.length; ++i) {
		left = Math.max(left, weights[i]);
		right += weights[i];
	}

	while (left < right) {
		mid = (left + right) >>> 1;

        if (couldShipThemAll(weights, days, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
	}

	return left;
};
