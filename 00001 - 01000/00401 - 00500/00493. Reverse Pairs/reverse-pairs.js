/* =========================================================
=       Solution 1. mergesort: O(n log n)                  =
========================================================= */

// based on problem 912. sort-an-array.js

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const reversePairs = (nums) => {
	const temp = Array(nums.length).fill(0);
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

        let end = mid + 1;

        for (let i = low; i <= mid; ++i) {
            while (end <= high && nums[i] > nums[end] * 2) {
                ++end;
            }

            count += end - (mid + 1);
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
    }

	sorting(nums);

	return count;
};
