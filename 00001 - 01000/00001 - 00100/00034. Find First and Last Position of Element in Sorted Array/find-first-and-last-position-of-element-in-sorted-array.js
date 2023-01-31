/* =========================================================
=       Solution 1. binary search <[,]>: O(log n)          =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    let mid;

    while (left <= right) {
        mid = (left + right) >>> 1;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left === nums.length || nums[left] !== target) {
        return result;
    }

    result[0] = left;

    right = nums.length - 1;

    while (left <= right) {
        mid = (left + right) >>> 1;

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    result[1] = right;

    return result;
};
