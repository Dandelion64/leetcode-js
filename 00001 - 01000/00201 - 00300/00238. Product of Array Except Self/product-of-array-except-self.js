/* =========================================================
=       Solution 1. O(n)                                   =
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

/* =========================================================
=       Solution 2. prefix sum: O(n)                       =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
	const result = Array(nums.length).fill(1);

	for (let i = 1; i < nums.length; ++i) {
		result[i] = result[i - 1] * nums[i - 1];
	}

	let carry = 1;

	nums.push(1);

	for (let i = result.length - 1; i >= 0; --i) {
		carry *= nums[i + 1];
		result[i] *= carry;
	}

	return result;
};
