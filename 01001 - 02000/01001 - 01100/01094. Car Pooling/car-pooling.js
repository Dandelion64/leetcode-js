/* =========================================================
=       Solution 1. prefix sum (diff): O(n)                =
========================================================= */

class NumArray {
	/**
	 * @param {number[]} nums
	 */
	constructor(nums) {
		this.nums = nums;
		this.diffs = this.generateDiffs(nums);
	}

	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	generateDiffs(nums) {
		const diffs = Array(nums.length);

		diffs[0] = 0;

		for (let i = 1; i < diffs.length; ++i) {
			diffs[i] = nums[i] - nums[i - 1];
		}

		return diffs;
	}

	/**
	 * @param {number} start
	 * @param {number} end
	 * @param {number} value
	 */
	incrementRange(start, end, value) {
		this.diffs[start] += value;

		const endNextIndex = end + 1;

		if (endNextIndex < this.diffs.length) {
			this.diffs[endNextIndex] -= value;
		}
	}

	updateNums() {
		const newNums = Array(this.nums.length);

		newNums[0] = this.diffs[0];

		for (let i = 1; i < this.diffs.length; ++i) {
			newNums[i] = newNums[i - 1] + this.diffs[i];
		}

		this.nums = newNums;
	}

	/**
	 * @return {number[]}
	 */
	getInstance() {
		return this.nums;
	}
}

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = (trips, capacity) => {
	const nums = new NumArray(Array(1000).fill(0));
	let start, end, value;

	for (let trip of trips) {
		value = trip[0];
		start = trip[1];
		end = trip[2] - 1;

		nums.incrementRange(start, end, value);
	}

	nums.updateNums();

	const headCounts = nums.getInstance();

	for (let i = 0; i < headCounts.length; ++i) {
		if (headCounts[i] > capacity) {
			return false;
		}
	}

	return true;
};

/* =========================================================
=       Solution 2.v1. prefix sum (diff): O(n)             =
========================================================= */

// simplified

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = (trips, capacity) => {
	const result = Array(1000).fill(0);

	for (let [value, start, end] of trips) {
        result[start] += value;
        result[end] -= value;
	}

	for (let i = 0; i < result.length; ++i) {
        if (i > 0) {
            result[i] = result[i] + result[i -1];
        }

		if (result[i] > capacity) {
			return false;
		}
	}

	return true;
};
