/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/* =========================================================
=       Solution 1. prefix sum: O(n)                       =
========================================================= */

class Solution {
	/**
	 * @param {number[]} w
	 */
	constructor(w) {
		this.nums = w;
		this.length = w.length;
		this.prefixSum = this.generatePrefixSum();
	}

	/**
	 * @return {number[]}
	 */
	generatePrefixSum() {
		const sums = Array(this.length + 1);

		sums[0] = 0;

		for (let i = 1; i <= this.length; ++i) {
			sums[i] = sums[i - 1] + this.nums[i - 1];
		}

		return sums;
	}

	/**
	 * @return {number}
	 */
	pickIndex() {
		const target = Math.floor(this.prefixSum[this.length] * Math.random()) + 1;

		return this.findLeftBoundByBinarySearch(this.prefixSum, target) - 1;
	}

	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	findLeftBoundByBinarySearch(nums, target) {
		if (nums.length === 0) return -1;
		let left = 0, right = nums.length, mid;

		while (left < right) {
			mid = (left + right) >>> 1;

			if (nums[mid] >= target) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}

		return left;
	}
}
