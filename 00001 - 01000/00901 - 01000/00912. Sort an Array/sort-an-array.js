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

/* =========================================================
=       Solution 3. mergesort: O(n log n)                  =
========================================================= */

// fast

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
	const temp = Array(nums.length).fill(0);

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
	 * @return {number[]}
	 */
	const sort = (nums, low, high) => {
		if (low === high) return;

		const mid = (low + high) >>> 1;

		sort(nums, low, mid);
		sort(nums, mid + 1, high);
		merge(nums, low, mid, high);
	};

	sort(nums, 0, nums.length - 1);

	return nums;
};
