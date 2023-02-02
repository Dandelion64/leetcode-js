/* =========================================================
=       Solution 1. backtracking: O(n!)                    =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
	const result = [];
	const track = [];
	const used = new Array(nums.length);

	nums = nums.sort((a, b) => a - b);

	/**
	 * @param {number[]} nums
	 * @param {number[]} track
	 * @return {number[][]}
	 */
	const backtrack = (nums) => {
		const n = nums.length;

		if (track.length === n) {
			// slice() return a new array
			result.push(track.slice());
			return;
		}

		for (let i = 0; i < n; ++i) {
			if (used[i]) {
				continue;
			}

			// !used[i - 1] keep the order of the elements with the same value.
			if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
				continue;
			}

			track.push(nums[i]);
			used[i] = true;
			backtrack(nums);
			track.pop();
			used[i] = false;
		}
	};

	backtrack(nums);

	return result;
};
