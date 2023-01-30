/* =========================================================
=       Solution 1. backtracking: O(n * 2^n)               =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
    const result = [];
    const track = [];

    nums = nums.sort((a, b) => a - b);

    /**
     * @param {number[]} nums
     * @param {number[]} track
     * @param {number} start
     * @return {void}
     */
    const backtrack = (nums, start) => {
        // slice() return a new array
        result.push(track.slice());

        for (let i = start; i < nums.length; ++i) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            track.push(nums[i]);
            backtrack(nums, i + 1);
            track.pop();
        }
    }

    backtrack(nums, 0);

    return result;
};
