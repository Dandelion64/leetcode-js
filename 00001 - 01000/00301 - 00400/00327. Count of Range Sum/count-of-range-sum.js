/* =========================================================
=       Solution 1. mergesort: O(n log n)                  =
========================================================= */

// based on problem 912. sort-an-array.js

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countRangeSum = (nums, lower, upper) => {
	const temp = Array(nums.length);
	const prefixSum = Array(nums.length + 1).fill(0);

	for (let i = 0; i < nums.length; ++i) {
		prefixSum[i + 1] = nums[i] + prefixSum[i];
	}

	let count = 0;

    /**
	 * @param {number[]} nums
	 * @param {number} low
	 * @param {number} mid
	 * @param {number} high
	 */
	const merge = (nums, low, mid, high) => {
		for (let i = low; i <= high; ++i) {
			temp[i] = nums[i];
		}

        let start = mid + 1, end = mid + 1;

        for (let i = low; i <= mid; ++i) {
            while (start <= high && nums[start] - nums[i] < lower) {
                ++start;
            }

            while (end <= high && nums[end] - nums[i] <= upper) {
                ++end;
            }

            count += end - start;
        }

		let i = low, j = mid + 1;

		for (let p = low; p <= high; ++p) {
			if (i === mid + 1) {
				nums[p] = temp[j++];
			} else if (j === high + 1) {
				nums[p] = temp[i++];
			} else if (temp[i] > temp[j]) {
				nums[p] = temp[j++];
			} else {
				nums[p] = temp[i++];
			}
		}
	};

    /**
	 * @param {number[]} nums
	 * @param {number} low
	 * @param {number} high
	 */
	const sort = (nums, low, high) => {
		if (low === high) return;

		const mid = (low + high) >>> 1;

		sort(nums, low, mid);
		sort(nums, mid + 1, high);
		merge(nums, low, mid, high);
	};

	/**
	 * @param {number[]} nums
	 */
	const sorting = (nums) => {
		sort(nums, 0, nums.length - 1);
	};

	sorting(prefixSum);

	return count;
};
