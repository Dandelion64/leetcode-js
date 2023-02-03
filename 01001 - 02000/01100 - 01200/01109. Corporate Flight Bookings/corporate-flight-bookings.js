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
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = (bookings, n) => {
    const nums = new NumArray(Array(n).fill(0));
    let start, end, value;

    for (let booking of bookings) {
        start = booking[0] - 1;
        end = booking[1] - 1;
        value = booking[2];

        nums.incrementRange(start, end, value);
    }

    nums.updateNums();

    return nums.getInstance();
};

/* =========================================================
=       Solution 2.v1. prefix sum (diff): O(n)             =
========================================================= */

// simplified

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = (bookings, n) => {
    const result = Array(n).fill(0);

    for (let [start, end, value] of bookings) {
        result[start - 1] += value;

        if (end < n) {
            result[end] -= value;
        }
    }

    for (let i = 1; i < n; ++i) {
        result[i] += result[i - 1];
    }

    return result;
};

/* =========================================================
=       Solution 2.v2. prefix sum (diff): O(n)             =
========================================================= */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = (bookings, n) => {
    const result = Array(n).fill(0);

    for (let [start, end, value] of bookings) {
        result[start - 1] += value;
        result[end] -= value;
    }

    for (let i = 1; i < n; ++i) {
        result[i] += result[i - 1];
    }

    result.length = n; // fix the length

    return result;
};
