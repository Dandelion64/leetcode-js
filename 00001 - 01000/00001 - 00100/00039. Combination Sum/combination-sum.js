/* =========================================================
=       Solution 1. backtracking: O(2^n)                   =
========================================================= */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
	const result = [];
	const track = [];
	let trackSum = 0;

	candidates = candidates.sort((a, b) => a - b);

	/**
	 * @param {number[]} nums
	 * @param {number[]} track
	 * @param {number} start
	 * @return {void}
	 */
	const backtrack = (candidates, target, start) => {
		if (trackSum === target) {
			// slice() return a new array
			result.push(track.slice());
			return;
		}

		if (trackSum > target) {
			return;
		}

		for (let i = start; i < candidates.length; ++i) {
			if (i > start && candidates[i] === candidates[i - 1]) {
				continue;
			}

			track.push(candidates[i]);
			trackSum += candidates[i];
			backtrack(candidates, target, i);
			track.pop();
			trackSum -= candidates[i];
		}
	};

	backtrack(candidates, target, 0);

	return result;
};
