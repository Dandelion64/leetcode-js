/* =========================================================
=       Solution 1.v1. bottom-top dp iteration: O(n)       =
========================================================= */

// slow

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    const n = prices.length;

    const dp = Array.from({ length: n }, () => Array(2));

    for (let i = 0; i < n; ++i) {
        if (i - 1 === -1) {
            // base case
            dp[i][0] = 0;
            /*
                dp[i][0]
                    = max(dp[-1][0], dp[-1][1] + prices[i])
                    = max(0, -infinity + prices[i]) = 0
            */
            dp[i][1] = -prices[i] - fee;
            /*
                dp[i][1]
                    = max(dp[-1][1], dp[-1][0] - prices[i] - fee)
                    = max(-infinity, 0 - prices[i] - fee)
                    = -prices[i] - fee
            */
            continue;
        }

        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
    }

    return dp[n - 1][0];
};

/* =========================================================
=       Solution 1.v2. bottom-top dp iteration: O(n)       =
========================================================= */

// optimized

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    const n = prices.length;

    // base case
    let dp_i_0 = 0;
    let dp_i_1 = -Infinity;
    let temp;

    for (let i = 0; i < n; ++i) {
        temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i] - fee);
    }

    return dp_i_0;
};
