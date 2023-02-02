/* =========================================================
=       Solution 1. backtracking: O(C(n, k))               =
========================================================= */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
	const result = [];
	const track = [];

	/**
	 * @param {number[]} nums
	 * @param {number[]} track
	 * @param {number} start
	 * @return {void}
	 */
	const backtrack = (n, k, start) => {
		if (track.length === k) {
			// slice() return a new array
			result.push(track.slice());
		}

		for (let i = start; i <= n; ++i) {
			track.push(i);
			backtrack(n, k, i + 1);
			track.pop();
		}
	};

	backtrack(n, k, 1);

	return result;
};
