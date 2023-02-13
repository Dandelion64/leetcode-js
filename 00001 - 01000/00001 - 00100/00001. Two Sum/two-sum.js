/* =========================================================
=       Solution 1.v1. O(n)                                =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const indexObject = {};

	for (let i = 0; i < nums.length; ++i) {
		const complement = target - nums[i];

		if (indexObject.hasOwnProperty(complement)) {
			return [indexObject[complement], i];
		}

		indexObject[nums[i]] = i;
	}
};

/* =========================================================
=       Solution 1.v2. O(n)                                =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const indexMap = new Map();

	for (let i = 0; i < nums.length; ++i) {
		const complement = target - nums[i];

		if (indexMap.has(complement)) {
			return [indexMap.get(complement), i];
		}

		indexMap.set(nums[i], i);
	}
};

/* =========================================================
=       Solution 2. two pointers: O(n log n)               =
========================================================= */

// sorting

// slow

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	let sortedNums = nums.map((n) => n);

	sortedNums.sort((a, b) => a - b); // in-place

	let left = 0, right = sortedNums.length - 1, sum;

	while (left < right) {
		sum = sortedNums[left] + sortedNums[right];

		if (sum === target) {
			return [nums.indexOf(sortedNums[left]), nums.lastIndexOf(sortedNums[right])];
		} else if (sum < target) {
			++left;
		} else {
			--right;
		}
	}

	return [-1, -1]; // exactly one answer exists
};
