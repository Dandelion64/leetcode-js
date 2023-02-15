/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
    const result = BigInt(num.join('')) + BigInt(k); // 1 <= num.length <= 10000
    return result.toString().split('');
};
