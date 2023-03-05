/* =========================================================
=       Solution 1. binary search [,]: O(n)                =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
	let left = 0, right = (nums.length >> 1) + 1;

	while (left < right - 1) {
		const mid = (left + right) >>> 1;

        if (nums[mid * 2 - 1] !== nums[mid * 2]) {
            left = mid;
        } else {
            right = mid;
        }
	}

	return nums[left * 2];
};

/* =========================================================
=       Solution 2. binary search [,]: O(n)                =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
	let left = 0, right = nums.length - 1;

	while (left < right) {
		const mid = (left + right) >>> 1;

        // bit computation faster than remainder(%)
		if ((mid & 1) == 0) {
			if (nums[mid] === nums[mid + 1]) {
				left = mid + 2;
			} else {
				right = mid;
			}
		} else {
			if (nums[mid] === nums[mid - 1]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}

	return nums[left];
};
