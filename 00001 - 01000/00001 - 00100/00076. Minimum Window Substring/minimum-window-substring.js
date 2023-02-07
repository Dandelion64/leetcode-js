/* =========================================================
=       Solution 1.v1. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
	const dict = {};
	const m = s.length;
	const n = t.length;

	for (let i = 0; i < n; ++i) {
		dict[t[i]] = dict[t[i]] ? ++dict[t[i]] : 1;
	}

	const o = Object.keys(dict).length;

	const window = {};
	let start = 0, end = 0, startIndex = 0, minLength = Infinity, validCount = 0;

	while (end < m) {
		if (dict[s[end]]) {
			window[s[end]] = window[s[end]] ? ++window[s[end]] : 1;

			if (window[s[end]] === dict[s[end]]) {
				++validCount;
			}
		}

		++end;

		while (validCount === o) {
			const length = end - start;

			if (length < minLength) {
				startIndex = start;
				minLength = length;
			}

			if (dict[s[start]]) {
				if (window[s[start]] === dict[s[start]]) {
					--validCount;
				}

				--window[s[start]];
			}

			++start;
		}
	}

	return minLength === Infinity ? '' : s.substring(startIndex, startIndex + minLength);
};

/* =========================================================
=       Solution 1.v2. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
	const dict = {};
	const m = s.length;
	const n = t.length;

	for (let i = 0; i < n; ++i) {
		dict[t[i]] = dict[t[i]] ? ++dict[t[i]] : 1;
	}

	let start = 0, end = 0, startIndex = m + 1, minLength = m + 1, matchCount = 0;

	while (end < m) {
		if (--dict[s[end]] >= 0) {
			++matchCount;
		}

        ++end;

		while (matchCount === n) {
			const length = end - start;

			if (length < minLength) {
				minLength = length;
				startIndex = start;
			}

			if (++dict[s[start]] > 0) {
				--matchCount;
			}

			++start;
		}
	}

	return s.slice(startIndex, startIndex + minLength);
};
