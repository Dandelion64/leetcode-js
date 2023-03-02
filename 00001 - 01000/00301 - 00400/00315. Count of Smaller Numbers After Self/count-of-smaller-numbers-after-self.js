/* =========================================================
=       Solution 1. mergesort: O(n log n)                  =
========================================================= */

// based on problem 912. sort-an-array.js
// Java is okay but JavaScript TLE

class Pair {
	/**
	 * @param {number} val
	 * @param {number} index
	 */
	constructor(val, index) {
		this.val = val;
		this.index = index;
	}
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
	const n = nums.length;
	const temp = Array(n);
	const counts = Array(n).fill(0);
	const pairs = Array(n);

	for (let i = 0; i < n; ++i) {
		pairs[i] = new Pair(nums[i], i);
	}

	/**
	 * @param {Pair[]} array
	 * @param {number} low
	 * @param {number} mid
	 * @param {number} high
	 */
	const merge = (array, low, mid, high) => {
		for (let i = low; i <= high; ++i) {
			temp[i] = array[i];
		}

		let i = low, j = mid + 1;

		for (let p = low; p <= high; ++p) {
			if (i === mid + 1) {
				array[p] = temp[j++];
			} else if (j === high + 1) {
				array[p] = temp[i++];
				counts[array[p].index] += j - mid - 1;
			} else if (temp[i].val > temp[j].val) {
				array[p] = temp[j++];
			} else {
				array[p] = temp[i++];
				console.log(j - mid - 1);
				counts[array[p].index] += j - mid - 1;
			}
		}
	};

	/**
	 * @param {Pair[]} array
	 * @param {number} low
	 * @param {number} high
	 */
	const sort = (array, low, high) => {
		if (low === high) return;

		const mid = (low + high) >>> 1;

		sort(array, low, mid);
		sort(array, mid + 1, high);
		merge(array, low, mid, high);
	};

	sort(pairs, 0, n - 1);

	const result = [];

	for (let c of counts) {
		result.push(c);
	}

	return result;
};

/* =========================================================
=       Solution 2. mergesort: O(n log n)                  =
========================================================= */

// Ref: https://github.com/Tcdian/LeetCode/blob/master/LeetCode/Sorting/315.%20Count%20of%20Smaller%20Numbers%20After%20Self.js.md

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
	const indexes = nums.map((num, index) => index);
	const counts = new Array(nums.length).fill(0);
	const helper = new Array(nums.length);

    /**
	 * @param {number[]} indexes
	 * @param {number} low
	 * @param {number} mid
	 * @param {number} high
	 */
    const merge = (indexes, low, mid, high) => {
		for (let i = low; i <= high; ++i) {
            helper[i] = indexes[i];
        }

        let i = low, j = mid + 1;
        let count = 0;

        for (let k = low; k <= high; ++k) {
            if (i > mid) {
                indexes[k] = helper[j++];
            } else if (j > high) {
                indexes[k] = helper[i];
                counts[helper[i++]] += count;
            } else if (nums[helper[i]] > nums[helper[j]]) {
                indexes[k] = helper[j++];
                ++count;
            } else {
                indexes[k] = helper[i];
                counts[helper[i++]] += count;
            }
        }
	};

	/**
	 * @param {number[]} indexes
	 * @param {number} low
	 * @param {number} high
	 */
	const mergeSort = (indexes, low, high) => {
		if (low >= high) return;

		const mid = (low + high) >>> 1;

		mergeSort(indexes, low, mid);
		mergeSort(indexes, mid + 1, high);
		merge(indexes, low, mid, high);
	};

	mergeSort(indexes, 0, nums.length - 1);

	return counts;
};
