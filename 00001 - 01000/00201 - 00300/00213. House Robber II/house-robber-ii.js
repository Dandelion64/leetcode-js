/* =========================================================
=       Solution 1. bottom-top dp iteration: O(n)          =
========================================================= */

// optimized

/**
 * based on the solution of problem 198. house-robber.js
 * just need to compare the dp_i of [, ) and that of (, ]
 * and then return the larger one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    /**
     * @param {number} start
     * @param {number} end
     * @return {number}
     */
    const robRange = (start, end) => {
        let dp_i_1 = 0, dp_i_2 = 0; // for dp[i + 1], dp[i + 2]
        let dp_i;

        for (let i = end; i >= start; --i) {
            dp_i = Math.max(dp_i_1, dp_i_2 + nums[i]);
            dp_i_2 = dp_i_1;
            dp_i_1 = dp_i;
        }

        return dp_i;
    }

    return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};
