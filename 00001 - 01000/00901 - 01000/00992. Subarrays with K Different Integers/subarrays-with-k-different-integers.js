/* =========================================================
=       Solution 1. sliding window: O(n)                   =
========================================================= */

// Ref: https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/1471547/Javascript-sliding-window-re-use-of-lc992-solution/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {
    const length = nums.length;

    /**
     * @param {number} k
     * @return {number}
     */
    const atMost = (k) => {
        let [left, right, result] = [0, 0, 0];
        const window = new Map();
        const [frequency, increment, decrement] = [
            (i) => window.get(nums[i]) || 0,
            (i) => window.set(nums[i], frequency(i) + 1),
            (i) => (frequency(i) === 1) ? window.delete(nums[i]) : window.set(nums[i], frequency(i) - 1),
        ];

        while (right < length) {
            increment(right++);

            while (window.size > k) {
                decrement(left++);
            }

            result += right - left;
        }

        return result;
    }

    return atMost(k) - atMost(k - 1);
};


