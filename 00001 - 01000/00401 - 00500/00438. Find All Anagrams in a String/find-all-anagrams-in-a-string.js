/* =========================================================
=       Solution 1.v1. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
	const n = s.length;
	const m = p.length;
	const dict = {};

	for (let i = 0; i < m; ++i) {
		dict[p[i]] = dict[p[i]] ? ++dict[p[i]] : 1;
	}

	const o = Object.keys(dict).length;

	const window = {};
	const result = [];
	let start = 0, end = 0, validCount = 0;

	while (end < n) {
		if (dict[s[end]]) {
			window[s[end]] = window[s[end]] ? ++window[s[end]] : 1;

			if (window[s[end]] === dict[s[end]]) {
				++validCount;
			}
		}

		++end;

		if (end - start === m) {
			if (validCount === o) {
				result.push(start);
			}

			if (dict.has(s[start])) {
				if (window[s[start]] === dict[s[start]]) {
					--validCount;
				}

				--window[s[start]];
			}

			++start;
		}
	}

	return result;
};

/* =========================================================
=       Solution 1.v2. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
	const n = s.length;
	const m = p.length;
	const dict = new Map();

	for (let i = 0; i < m; ++i) {
		if (dict.has(p[i])) {
            // dict.set(a, dict.get(a)++) is invalid
            dict.set(p[i], dict.get(p[i]) + 1);
        } else {
            dict.set(p[i], 1);
        }
	}

	const window = {};
	const result = [];
	let start = 0, end = 0, validCount = 0;

	while (end < n) {
		if (dict.has(s[end])) {
			window[s[end]] = window[s[end]] ? ++window[s[end]] : 1;

			if (window[s[end]] === dict.get(s[end])) {
				++validCount;
			}
		}

		++end;

		if (end - start === m) {
			if (validCount === dict.size) {
				result.push(start);
			}

			if (dict[s[start]]) {
				if (window[s[start]] === dict.get(s[start])) {
					--validCount;
				}

				--window[s[start]];
			}

			++start;
		}
	}

	return result;
};

/* =========================================================
=       Solution 1.v3. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
	const length = p.length;
	const dict = {};
	const result = [];
	let start = 0, end = 0, matchCount = 0;

	for (let i = 0; i < length; ++i) {
		dict[p[i]] = dict[p[i]] ? ++dict[p[i]] : 1;
	}

	while (end < s.length) {
		if (--dict[s[end]] >= 0) {
			++matchCount;
		}

		if (end - start + 1 === length) {
			if (matchCount === length) {
				result.push(start);
			}

			if (++dict[s[start]] > 0) {
				--matchCount;
			}

			++start;
		}

		++end;
	}

	return result;
};

/* =========================================================
=       Solution 2. bit computing: O(n)                    =
========================================================= */

// fast (xor) (still with some bugs)

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
	let set = {}, xor = 0, sum = 0, n = p.length, c1, c2, i;
	const result = [];

	for (i = 0; i < p.length; i++) {
		c1 = p.charCodeAt(i);

		xor ^= c1;
		sum += c1;
		set[c1] = true;
	}

	for (i = 0; i < p.length; i++) {
		c2 = s.charCodeAt(i);

		xor ^= c2;
		sum -= c2;
		n -= c2 in set;
	}

	if (sum === 0 && xor === 0 && n === 0) {
		result.push(0);
	}

	for (; i < s.length; i++) {
		c1 = s.charCodeAt(i - p.length);
		c2 = s.charCodeAt(i);

		xor ^= c2 ^ c1;
		sum -= c2 - c1;
		n -= (c2 in set) - (c1 in set);

		if (sum === 0 && xor === 0 && n === 0) {
			result.push(i - p.length + 1);
		}
	}

	return result;
};
