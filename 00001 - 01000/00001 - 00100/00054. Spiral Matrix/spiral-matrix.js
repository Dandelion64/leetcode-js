/* =========================================================
=       Solution 1. O(mn)                                  =
========================================================= */

// fast

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
	const m = matrix.length;
	const n = matrix[0].length;
	const result = [];
	let top = 0, bottom = m - 1, left = 0, right = n - 1;

	while (true) {
		for (let i = left; i <= right; i++) {
			result.push(matrix[top][i]);
		}

		if (++top > bottom) break;

		for (let i = top; i <= bottom; i++) {
			result.push(matrix[i][right]);
		}

		if (--right < left) break;

		for (let i = right; i >= left; i--) {
			result.push(matrix[bottom][i]);
		}

		if (--bottom < top) break;

		for (let i = bottom; i >= top; i--) {
			result.push(matrix[i][left]);
		}

		if (++left > right) break;
	}

	return result;
};
