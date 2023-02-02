/* =========================================================
=       Solution 1. fast-slow pointers: O(n + n(0))        =
========================================================= */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
	const n = nums.length;
	let slow = 0, fast = 0;

	while (fast < n) {
		if (nums[fast] !== 0) {
			nums[slow++] = nums[fast];
		}

		++fast;
	}

	while (slow < n) {
		nums[slow++] = 0;
	}
};
