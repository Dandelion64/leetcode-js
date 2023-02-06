/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
	return s.split('').reverse().join('');
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
	const chars = s.trim().split('');

	let left = 0, right = s.length - 1;

	while (left < right) {
		[chars[left], chars[right]] = [chars[right], chars[left]];

		++left;
		--right;
	}

	const words = chars.join('').split(/\s+/);
	let result = '';

	for (let word of words) {
		result += reverseString(word);
		result += ' ';
	}

	return result.slice(0, result.length - 1);
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
	let string = '';
	let word = '';

	for (let i in s) {
		let char = s[i];

		if (char === ' ') {
			if (string.length === 0) {
				string = word;
			} else if (word.length) {
				string = word + char + string;
			}

			word = '';
		} else {
			word += char;
		}
	}

	if (string.length === 0) {
		return word;
	} else if (string.length && word.length) {
		return `${word} ${string}`;
	} else if (string.length && word.length === 0) {
		return string;
	}
};
