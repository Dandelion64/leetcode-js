/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
    let coordX = 0, coordY = 0, loop = n >> 1, offset = 1, cur = 1;
    const result = new Array(n).fill().map(() => new Array(n).fill());

    while (loop--) {
        let row = coordX;
        let column = coordY;

        for (; column < n - offset; ++column) {
            result[row][column] = cur++;
        }

        for (; row < n - offset; ++row) {
            result[row][column] = cur++;
        }

        for (; column > coordX; --column) {
            result[row][column] = cur++;
        }

        for (; row > coordY; --row) {
            result[row][column] = cur++;
        }

        ++coordX;
        ++coordY;
        ++offset;
    }

    if (n % 2 === 1) {
        const mid = n >> 1;
        result[mid][mid] = cur;
    }

    return result;
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

// fast

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
	const result = Array.from({ length: n }, () => Array(n));
	let top = 0, bottom = n - 1, left = 0, right = n - 1, cur = 1;

	while (true) {
		for (let i = left; i <= right; i++) {
			result[top][i] = cur++;
		}

		if (++top > bottom) break;

		for (let i = top; i <= bottom; i++) {
			result[i][right] = cur++;
		}

		if (--right < left) break;

		for (let i = right; i >= left; i--) {
			result[bottom][i] = cur++;
		}

		if (--bottom < top) break;

		for (let i = bottom; i >= top; i--) {
			result[i][left] = cur++;
		}

		if (++left > right) break;
	}

	return result;
};
