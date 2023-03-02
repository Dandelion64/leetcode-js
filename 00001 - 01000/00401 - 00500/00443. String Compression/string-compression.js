/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
	if (chars.length <= 1) return chars.length;

	let start = 0, end = 0, write = 1;
	let result = 1;

	for (let i = 1; i < chars.length; ++i) {
		if (chars[i] === chars[i - 1]) {
			++end;
		} else {
			if (end - start !== 0) {
				countString = String(end - start + 1);
				result += countString.length;
				for (let j = 0; j < countString.length; ++j) {
					chars[write++] = countString[j];
				}
			}

			++result;
			chars[write++] = chars[i];
			start = i;
			end = i;
		}
	}

	if (end - start !== 0) {
		countString = String(end - start + 1);
		result += countString.length;
		for (let j = 0; j < countString.length; ++j) {
			chars[write++] = countString[j];
		}
	}

	chars.length = result;

	return result;
};
