/* =========================================================
=       Solution 1. prefix sum: O(n)                       =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
	const result = [];
	let left = 1, right = 1;

	for (let i = 0; i < nums.length; ++i) {
		result[i] = left;
		left *= nums[i];
	}

	for (let i = nums.length - 1; i >= 0; --i) {
		result[i] = right * result[i];
		right *= nums[i];
	}

	return result;
};
