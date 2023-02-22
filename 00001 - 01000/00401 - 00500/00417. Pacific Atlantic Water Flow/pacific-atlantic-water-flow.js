/* =========================================================
=       Solution 1. dfs: O(m * n)                          =
========================================================= */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
	const rows = heights.length;
	const cols = heights[0].length;

	const pacific = Array.from({ length: rows }, () => Array(cols));
	const atlantic = Array.from({ length: rows }, () => Array(cols));

	/**
	 * @param {number} i
	 * @param {number} j
	 * @param {number} prev
	 * @param {number[][]} ocean
	 * @return {boolean}
	 */
	const isFlowed = (i, j, prev, ocean) => {
		if (i < 0 || i >= rows || j < 0 || j >= cols || heights[i][j] < prev || ocean[i][j]) {
			return true;
		}
	};

	/**
	 * @param {number} i
	 * @param {number} j
	 * @param {number} prev
	 * @param {number[][]} ocean
	 */
	const dfs = (i, j, prev, ocean) => {
		if (isFlowed(i, j, prev, ocean)) return;

		ocean[i][j] = true;

		dfs(i + 1, j, heights[i][j], ocean);
		dfs(i - 1, j, heights[i][j], ocean);
		dfs(i, j + 1, heights[i][j], ocean);
		dfs(i, j - 1, heights[i][j], ocean);
	};

	for (let row = 0; row < heights.length; row++) {
		dfs(row, 0, -Infinity, pacific);
		dfs(row, cols - 1, -Infinity, atlantic);
	}

	for (let col = 0; col < heights[0].length; col++) {
		dfs(0, col, -Infinity, pacific);
		dfs(rows - 1, col, -Infinity, atlantic);
	}

	const result = [];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (pacific[i][j] && atlantic[i][j]) {
				result.push([i, j]);
			}
		}
	}

	return result;
};

/* =========================================================
=       Solution 2. dfs: O(m * n)                          =
========================================================= */

// fast

// Ref: https://www.honingjs.com/challenges/leetcode/417-pacific-atlantic-water-flow

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
	const rows = heights.length;
	const cols = heights[0].length;

	const pacificVisited = new Set();
	const atlanticVisited = new Set();

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	/**
	 * @param {Set} setA
	 * @param {Set} setB
	 * @return {Set}
	 */
	const intersection = (setA, setB) => {
		const result = new Set();

		for (const el of setB) {
			if (setA.has(el)) {
				result.add(el);
			}
		}
		return result;
	};

	/**
	 * @param {number} i
	 * @param {number} j
	 * @param {Set} visited
	 */
	const dfs = (i, j, visited) => {
		const pair = `${i}-${j}`;

		if (visited.has(pair)) return;

		visited.add(pair);

		for (const direction of directions) {
			const [nextI, nextJ] = [i + direction[0], j + direction[1]];
			if (0 <= nextI && nextI < rows && 0 <= nextJ && nextJ < cols && heights[nextI][nextJ] >= heights[i][j]) {
				dfs(nextI, nextJ, visited);
			}
		}
	};

	for (let row = 0; row < heights.length; row++) {
		dfs(row, 0, pacificVisited);
		dfs(row, cols - 1, atlanticVisited);
	}

	for (let col = 0; col < heights[0].length; col++) {
		dfs(0, col, pacificVisited);
		dfs(rows - 1, col, atlanticVisited);
	}

	return [...intersection(pacificVisited, atlanticVisited)].map((pair) => pair.split('-').map(Number));
};
