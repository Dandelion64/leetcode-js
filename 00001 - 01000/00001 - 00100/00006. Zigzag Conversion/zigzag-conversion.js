/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
	const n = s.length;

	if (n === 1 || numRows === 1) {
		return s;
	}

	const zigzag = Array.from({ length: numRows }, () => []);
	let curRow = 1, isDownward = true;

	for (let i = 0; i < n; ++i) {
		zigzag[curRow - 1].push(s[i]);

		if (isDownward) {
			++curRow;

			if (curRow > numRows) {
				curRow = numRows - 1;
				isDownward = false;
			}
		} else {
			--curRow;

			if (curRow < 1) {
				curRow = 2;
				isDownward = true;
			}
		}
	}

	let result = '';

	for (let i = 0; i < numRows; ++i) {
		result += zigzag[i].join('');
	}

	return result;
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
	const n = s.length;

	if (n === 1 || numRows === 1) {
		return s;
	}

	const result = Array(numRows).fill('');
	const nGroup = 2 * numRows - 2;
	// each group look like:
	// Z
	// I   G
	// G A
	// Z
	let remainder;

	for (let i = 0; i < n; ++i) {
		remainder = i % nGroup;

		if (remainder > numRows - 1) {
			remainder = nGroup - remainder;
		}

		result[remainder] += s[i];
	}

	return result.join('');
};
