/* =========================================================
=       Solution 1.v1. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
	const dictionary = {};
	const n = s1.length;
	const m = s2.length;

	for (let i = 0; i < n; ++i) {
		dictionary[s1[i]] = dictionary[s1[i]] ? ++dictionary[s1[i]] : 1;
	}

	const o = Object.keys(dictionary).length;

	const window = {};
	let start = 0;
	let end = 0;
	let validCount = 0;

	while (end < m) {
		if (dictionary[s2[end]]) {
			window[s2[end]] = window[s2[end]] ? ++window[s2[end]] : 1;

			if (window[s2[end]] === dictionary[s2[end]]) {
				++validCount;
			}
		}

		++end;

		while (validCount === o) {
			if (end - start === n) {
				return true;
			}

			if (dictionary[s2[start]]) {
				if (window[s2[start]] === dictionary[s2[start]]) {
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
	const dictionary = {};
	const n = s1.length;
	const m = s2.length;

	for (let i = 0; i < n; ++i) {
		dictionary[s1[i]] = dictionary[s1[i]] ? ++dictionary[s1[i]] : 1;
	}

	const o = Object.keys(dictionary).length;

	let start = 0, end = 0, matchCount = 0;

	while (end < m) {
		if (--dictionary[s2[end]] === 0) {
			++matchCount;
		}

		while (matchCount === o) {
			if (end - start + 1 === n) {
				return true;
			}

			if (++dictionary[s2[start]] > 0) {
				--matchCount;
			}

			++start;
		}

		++end;
	}

	return false;
};
