/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    let sum;

    while (left < right) {
        sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            ++left;
        } else {
            --right;
        }
    }

    return [-1, -1];
};
