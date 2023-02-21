/* =========================================================
=       Solution 1. dfs: O(n * m)                          =
========================================================= */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
	const rows = grid.length;
    const cols = grid[0].length;
	let count = 0;

	/**
	 * @param {number} row
	 * @param {number} col
	 */
	const isSea = (row, col) => {
		return row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1';
	};

	/**
	 * @param {number} row
	 * @param {number} col
	 */
	const dfs = (row, col) => {
		if (isSea(row, col)) return;

		grid[row][col] = '0';

		dfs(row - 1, col);
		dfs(row + 1, col);
		dfs(row, col - 1);
		dfs(row, col + 1);
	};

	for (let i = 0; i < rows; ++i) {
		for (let j = 0; j < cols; ++j) {
			if (grid[i][j] === '1') {
				dfs(i, j);
				++count;
			}
		}
	}

	return count;
};

/* =========================================================
=       Solution 2. bfs: O(n * m)                          =
========================================================= */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
	const [rows, cols] = [grid.length, grid[0].length];
	let count = 0;

	/**
	 * @param {number} row
	 * @param {number} col
	 */
	const isSea = (row, col) => {
		return row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1';
	};

	/**
	 * @param {number} row
	 * @param {number} col
	 */
	const bfs = (row, col) => {
        const queue = [[row, col]];

        while (queue.length > 0) {
            const [row, col] = queue.shift();

            if (isSea(row, col)) continue;

            grid[row][col] = '0';

            queue.push([row + 1, col]);
            queue.push([row, col + 1]);
            queue.push([row - 1, col]);
            queue.push([row, col - 1]);
        }
	};

	for (let i = 0; i < rows; ++i) {
		for (let j = 0; j < cols; ++j) {
			if (grid[i][j] === '1') {
				bfs(i, j);
				++count;
			}
		}
	}

	return count;
};
