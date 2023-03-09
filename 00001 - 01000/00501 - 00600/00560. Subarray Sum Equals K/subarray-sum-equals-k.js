/* =========================================================
=       Solution 1. prefix sum: O(n)                       =
========================================================= */

// hash table

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    const map = new Map();
    let count = 0, sum = 0;

    map.set(0, 1);

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};
