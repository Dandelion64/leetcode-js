/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/* =========================================================
=       Solution 1. prefix sum: O(n)                       =
========================================================= */

class NumMatrix {
	/**
	 * @param {number[][]} matrix
	 */
	constructor(matrix) {
		this.matrix = matrix;
		this.prefixSums = this.generateRegionPrefixSum(matrix);
	}

	generateRegionPrefixSum(matrix) {
		const row = matrix.length;
		const col = matrix[0].length;
		const sums = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));

		for (let i = 1; i <= row; ++i) {
			for (let j = 1; j <= col; ++j) {
				sums[i][j] = matrix[i - 1][j - 1] + sums[i - 1][j] + sums[i][j - 1] - sums[i - 1][j - 1];
			}
		}

		return sums;
	}

	/**
	 * @param {number} row1
	 * @param {number} col1
	 * @param {number} row2
	 * @param {number} col2
	 * @return {number}
	 */
	sumRegion(row1, col1, row2, col2) {
		return (
			this.prefixSums[row2 + 1][col2 + 1] -
			this.prefixSums[row1][col2 + 1] -
			this.prefixSums[row2 + 1][col1] +
			this.prefixSums[row1][col1]
		);
	}
}
