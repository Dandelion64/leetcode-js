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

    if (k > (n >> 1)) {
        const dp = Array.from({ length: n }, () => Array(2));

        for (let i = 0; i < n; ++i) {
            if (i - 1 === -1) {
                // base case
                dp[i][0] = 0;
                dp[i][1] = -prices[i];
                continue;
            }

            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        }

        return dp[n - 1][0];
    }

    const dp = Array.from({ length: n }, () => Array.from({ length: k }, () => [0, -Infinity]));

    for (let i = 0; i < n; ++i) {
        for (let j = k; j >= 1; --k) {
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
