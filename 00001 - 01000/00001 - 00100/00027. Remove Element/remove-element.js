/* =========================================================
=       Solution 1. Fast-slow Pointers: O(n)               =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }

        ++fast;
    }

    return slow;
};
