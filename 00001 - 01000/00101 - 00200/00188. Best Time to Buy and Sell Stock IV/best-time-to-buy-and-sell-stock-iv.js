/* =========================================================
=       Solution 1. bottom-top dp iteration: O(n)          =
========================================================= */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (k, prices) => {
    const n = prices.length;

    if (n < 2) {
        return 0;
    }

    if (k > (n >> 1)) {
        // problem 122. best-time-to-buy-and-sell-stock-ii.js
        // optimized

        // base case
        let dp_i_0 = 0;
        let dp_i_1 = -Infinity;
        let temp;

        for (let i = 0; i < n; ++i) {
            temp = dp_i_0;
            dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
            dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
        }

        return dp_i_0;
    }

    const dp = Array.from({ length: n }, () => Array.from({ length: k }, () => [0, -Infinity]));

    for (let i = 0; i < n; ++i) {
        for (let j = k; j >= 1; --j) {
            if (i - 1 === -1) {
                // base case
                dp[i][j - 1][0] = 0;
                dp[i][j - 1][1] = -prices[i];
                continue;
            }

            dp[i][j - 1][0] = Math.max(dp[i - 1][j - 1][0], dp[i - 1][j - 1][1] + prices[i]);

            if (j - 2 === -1) {
                // base case
                dp[i][j - 1][1] = Math.max(dp[i - 1][j - 1][1], -prices[i]);
            } else {
                dp[i][j - 1][1] = Math.max(dp[i - 1][j - 1][1], dp[i - 1][j - 2][0] - prices[i]);
            }
        }
    }

    return dp[n - 1][k - 1][0];
};
