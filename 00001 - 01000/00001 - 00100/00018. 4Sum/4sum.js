/* =========================================================
=       Solution 1. two pointers: O(n log n + n^3)         =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumTarget = (nums, start, target) => {
	let left = start, right = nums.length - 1;
	const result = [];

	while (left < right) {
		sum = nums[left] + nums[right];
		numLeft = nums[left];
		numRight = nums[right];

		if (sum < target) {
			while (left < right && nums[left] === numLeft) {
				++left;
			}
		} else if (sum > target) {
			while (left < right && nums[right] === numRight) {
				--right;
			}
		} else {
			result.push([numLeft, numRight]);

			while (left < right && nums[left] === numLeft) {
				++left;
			}

			while (left < right && nums[right] === numRight) {
				--right;
			}
		}
	}

	return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumTarget = (nums, start, target) => {
	const n = nums.length;
	let tuples;
	const result = [];

	for (let i = start; i < n; ++i) {
		tuples = twoSumTarget(nums, i + 1, target - nums[i]);

		for (tuple of tuples) {
			tuple.push(nums[i]);
			result.push(tuple);
		}

		while (i < n - 1 && nums[i] === nums[i + 1]) {
			++i;
		}
	}

	return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
	const n = nums.length;

	nums.sort((a, b) => a - b); // in-place

	let triples;
	const result = [];

	for (let i = 0; i < n; ++i) {
		triples = threeSumTarget(nums, i + 1, target - nums[i]);

		for (triple of triples) {
			triple.push(nums[i]);
			result.push(triple);
		}

		while (i < n - 1 && nums[i] === nums[i + 1]) {
			++i;
		}
	}

	return result;
};
