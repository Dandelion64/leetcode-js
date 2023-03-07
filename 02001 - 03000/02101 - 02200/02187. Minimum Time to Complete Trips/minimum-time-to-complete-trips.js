/* =========================================================
=       Solution 1. binary search [,]: O(n log m)          =
========================================================= */

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = (time, totalTrips) => {
	let lo = Math.min(...time), hi = totalTrips * lo, mid;

	while (lo < hi) {
		mid = lo + Math.floor((hi - lo) / 2);
        // right shift TLE
        // the reason is overflow

        // notice that ~~ is not equal to Math.floor()
        // Ref: https://codepen.io/supernova_at/post/javascript-s-double-bitwise-not-operator

		let trips = 0;

		for (let i = 0; i < time.length; ++i) {
			trips += Math.floor(mid / time[i]);
			if (trips >= totalTrips) break;
		}

		if (trips >= totalTrips) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}

	return lo;
};
