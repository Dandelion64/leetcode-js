/* =========================================================
=       Solution 1. Greedy: O(n)                           =
========================================================= */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
	const n = nums.length;
	let cur = 0, curMax = 0;

	for (let i = 0; i < n - 1; ++i) {
		curMax = Math.max(curMax, i + nums[i]);

		if (i === cur) {
			cur = curMax;
		}
	}

	return cur >= n - 1;
};
