/* =========================================================
=       Solution 1. monotonnic stack: O(n)                 =
========================================================= */

/**
 * @param {string} s
 * @return {string}
 */
const smallestSubsequence = (s) => {
    if (s.length === 0 || s.length === 1) return s;

	const stack = [];
	const n = s.length;
	const count = Array(256).fill(0); // ASCII

	for (let i = 0; i < n; ++i) {
		++count[s[i].charCodeAt(0)];
	}

	const used = Array(256).fill(false);

	for (let char of s.split('')) {
		--count[char.charCodeAt(0)];

		if (used[char.charCodeAt(0)]) {
			continue;
		}

		while (stack.length > 0 && stack.at(-1) > char) {
			if (count[stack.at(-1).charCodeAt(0)] === 0) {
				break;
			}

			used[stack.pop().charCodeAt(0)] = false;
		}

		stack.push(char);
		used[char.charCodeAt(0)] = true;
	}

	let result = '';

	while (stack.length > 0) {
		result = stack.pop() + result;
	}

	return result;
};
