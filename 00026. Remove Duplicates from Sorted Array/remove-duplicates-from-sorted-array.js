/* =========================================================
=       Solution 1. fast-slow pointers: O(n)               =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    const n = nums.length;

    if (n === 0) {
        return 0;
    }

    let slow = 0;
    let fast = 0;

    while (fast < n) {
        if (nums[fast] !== nums[slow]) {
            nums[++slow] = nums[fast];
        }

        ++fast;
    }

    return slow + 1;
};
