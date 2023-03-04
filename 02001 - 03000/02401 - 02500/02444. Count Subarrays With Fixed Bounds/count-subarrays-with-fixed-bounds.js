/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
    if (minK > maxK) return 0;

    let start = -1, end = -1, leftBound = -1;
    let count = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < minK || nums[i] > maxK) {
            leftBound = i;
            continue;
        }

        if (nums[i] === minK) start = i;
        if (nums[i] === maxK) end = i;

        count += Math.max(0, Math.min(start, end) - leftBound);
    }

    return count;
};
