/* =========================================================
=       Solution 1.v1. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
	const dict = {};
	const n = s1.length;
	const m = s2.length;

	for (let i = 0; i < n; ++i) {
		dict[s1[i]] = dict[s1[i]] ? ++dict[s1[i]] : 1;
	}

	const o = Object.keys(dict).length;

	const window = {};
	let start = 0, end = 0, validCount = 0;

	while (end < m) {
		if (dict[s2[end]]) {
			window[s2[end]] = window[s2[end]] ? ++window[s2[end]] : 1;

			if (window[s2[end]] === dict[s2[end]]) {
				++validCount;
			}
		}

		++end;

		while (validCount === o) {
			if (end - start === n) {
				return true;
			}

			if (dict[s2[start]]) {
				if (window[s2[start]] === dict[s2[start]]) {
					--validCount;
				}

				--window[s2[start]];
			}

			++start;
		}
	}

	return false;
};

/* =========================================================
=       Solution 1.v2. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
	const dict = new Map();
	const n = s1.length;
	const m = s2.length;

	for (let i = 0; i < n; ++i) {
		if (dict.has(s1[i])) {
			// dict.set(a, dict.get(a)++) is invalid
			dict.set(s1[i], dict.get(s1[i]) + 1);
		} else {
			dict.set(s1[i], 1);
		}
	}

	const window = {};
	let start = 0, end = 0, validCount = 0;

	while (end < m) {
		if (dict.has(s2[end])) {
			window[s2[end]] = window[s2[end]] ? ++window[s2[end]] : 1;

			if (window[s2[end]] === dict.get(s2[end])) {
				++validCount;
			}
		}

		++end;

		while (validCount === dict.size) {
			if (end - start === n) {
				return true;
			}

			if (dict.has(s2[start])) {
				if (window[s2[start]] === dict.get(s2[start])) {
					--validCount;
				}

				--window[s2[start]];
			}

			++start;
		}
	}

	return false;
};

/* =========================================================
=       Solution 1.v3. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
	const dict = {};
	const n = s1.length;
	const m = s2.length;

	for (let i = 0; i < n; ++i) {
		dict[s1[i]] = dict[s1[i]] ? ++dict[s1[i]] : 1;
	}

	const o = Object.keys(dict).length;

	let start = 0, end = 0, matchCount = 0;

	while (end < m) {
		if (--dict[s2[end]] === 0) {
			++matchCount;
		}

		while (matchCount === o) {
			if (end - start + 1 === n) {
				return true;
			}

			if (++dict[s2[start]] > 0) {
				--matchCount;
			}

			++start;
		}

		++end;
	}

	return false;
};
