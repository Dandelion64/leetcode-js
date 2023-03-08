/* =========================================================
=       Solution 1.v1. binary search [,]: O(n log m)       =
========================================================= */

/**
 * @param {number[]} piles
 * @param {number} h
 * @param {number} x
 * @return {number}
 */
const couldEatThemAll = (piles, h, x) => {
	let time = 0;

	for (let i = 0; i < piles.length; ++i) {
		time += Math.ceil(piles[i] / x);
	}

	return time <= h;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
	let lo = 1, hi = Math.max(...piles), mid;

	while (lo < hi) {
		mid = (lo + hi) >>> 1;

		if (couldEatThemAll(piles, h, mid)) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}

	return lo;
};

/* =========================================================
=       Solution 1.v2. binary search [,]: O(n log m)       =
========================================================= */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
	let lo = 1, hi = Math.max(...piles), mid;

	while (lo < hi) {
		mid = (lo + hi) >>> 1;

        let time = 0;

        for (let i = 0; i < piles.length; ++i) {
            time += Math.ceil(piles[i] / mid);
            if (time > h) break;
        }

		if (time <= h) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}

	return lo;
};

/* =========================================================
=       Solution 2. binary search [,]: O(n log m)          =
========================================================= */

/**
 * @param {number[]} piles
 * @param {number} h
 * @param {number} x
 * @return {number}
 */
const couldEatThemAll = (piles, h, x) => {
	let time = 0;

	for (let i = 0; i < piles.length; ++i) {
		time += Math.ceil(piles[i] / x);
	}

	return time <= h;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
    // 1 <= piles[i] <= 1000000000
	let lo = 1, hi = 1000000000 + 1, mid;

	while (lo < hi) {
		mid = (lo + hi) >>> 1;

		if (couldEatThemAll(piles, h, mid)) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}

	return lo;
};
