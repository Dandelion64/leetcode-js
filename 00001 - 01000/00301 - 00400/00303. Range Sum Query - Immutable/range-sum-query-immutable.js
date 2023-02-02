/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/* =========================================================
=       Solution 1. prefix sum: O(n)                       =
========================================================= */

class NumArray {
	/**
	 * @param {number[]} nums
	 */
	constructor(nums) {
		this.nums = nums;
		this.prefixSums = this.generatePrefixSums(nums);
	}

	generatePrefixSums(nums) {
		const prefixSums = Array(nums.length + 1);

		prefixSums[0] = 0;

		for (let i = 1; i < prefixSums.length; ++i) {
			prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
		}

		return prefixSums;
	}

	/**
	 * @param {number} left
	 * @param {number} right
	 * @return {number}
	 */
	sumRange(left, right) {
		return this.prefixSums[right + 1] - this.prefixSums[left];
	}
}
