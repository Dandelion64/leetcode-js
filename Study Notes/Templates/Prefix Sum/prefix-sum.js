/* =========================================================
=       Prefix Sum                                         =
========================================================= */

class NumArray {
	/**
	 * @param {number[]} nums
	 */
	constructor(nums) {
		this.nums = nums;
		this.prefixSums = this.generatePrefixSums(nums);
	}

	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
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
