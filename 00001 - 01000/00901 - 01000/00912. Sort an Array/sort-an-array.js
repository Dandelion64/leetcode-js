/* =========================================================
=       Solution 1. counting sort: O(n)                    =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
	const counts = Array(50000 * 2 + 1).fill(0);
	const result = [];

	for (const num of nums) {
		++counts[50000 + num];
	}

	for (let i in counts) {
		while (counts[i]--) {
			result.push(i - 50000);
		}
	}

	return result;
};

/* =========================================================
=       Solution 2. quicksort: O(n log n)                  =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
	/**
	 * @param {number[]} nums
	 * @param {number} a
	 * @param {number} b
	 */
	const swap = (nums, a, b) => {
		[nums[a], nums[b]] = [nums[b], nums[a]];
	};

	/**
	 * @param {number[]} nums
	 * @param {number} start
	 * @param {number} end
	 */
	const quicksort = (nums, start, end) => {
		if (start >= end) return;

		const pivotIndex = (start + end) >>> 1;
		const pivot = nums[pivotIndex];
		let i = start, j = end;

		while (i <= j) {
			while (nums[i] < pivot) ++i;
			while (nums[j] > pivot) --j;

			if (i <= j) {
				swap(nums, i, j);
                ++i;
                --j;
			}
		}

		quicksort(nums, start, j);
		quicksort(nums, i, end);
	};

	quicksort(nums, 0, nums.length - 1);

	return nums;
};
