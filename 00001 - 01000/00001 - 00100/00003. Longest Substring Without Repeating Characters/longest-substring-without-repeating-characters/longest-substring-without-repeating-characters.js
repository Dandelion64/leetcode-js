/* =========================================================
=       Solution 1.v1. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	const window = {};
	let start = 0, end = 0;
	let result = 0;

	while (end < s.length) {
		window[s[end]] = window[s[end]] ? ++window[s[end]] : 1;

		while (window[s[end]] > 1) {
			--window[s[start]];

			++start;
		}

		++end;

		result = Math.max(result, end - start);
	}

	return result;
};

/* =========================================================
=       Solution 1.v2. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	const chars = new Set();
	let start = 0, end = 0;
	let length = 0;

	while (end < s.length) {
		while (chars.has(s[end])) {
			chars.delete(s[start]);

			++start;
		}

		chars.add(s[end]);

		++end;

		length = Math.max(length, end - start);
	}

	return length;
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

// fast

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	const window = [];
	let length = 0;

	for (let i = 0; i < s.length; ++i) {
		const index = window.indexOf(s[i]);

		if (index !== -1) {
			window.splice(0, index + 1);
		}

		window.push(s[i]);
		length = Math.max(length, window.length);
	}

	return length;
};
