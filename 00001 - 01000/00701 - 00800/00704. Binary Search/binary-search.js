/* =========================================================
=       Solution 1. binary search <[,]>: O(log n)          =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
	let left = 0, right = nums.length - 1, mid;

	while (left <= right) {
		mid = (left + right) >>> 1;

		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};
