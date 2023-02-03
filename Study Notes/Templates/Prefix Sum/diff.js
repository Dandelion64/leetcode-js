/* =========================================================
=       Diff                                               =
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
