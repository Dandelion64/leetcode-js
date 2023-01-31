/* =========================================================
=       Solution 1. top-bottom with dp table: O(n)         =
========================================================= */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    let memoSet = {};

    /**
     * @param {number[]} coins
     * @param {number} amount
     * @param {object} memo
     * @return {number}
     */
    const dp = (coins, amount, memo) => {
        if (amount === 0) {
            return 0;
        }

        if (amount < 0) {
            return -1;
        }

        if (memo[amount]) {
            return memo[amount];
        }

        let count = Infinity;
        let tmp;

        for (let i = 0; i < coins.length; ++i) {
            tmp = dp(coins, amount - coins[i], memo);
            if (tmp !== -1) {
                count = Math.min(count, tmp + 1);
            }
        }

        memo[amount] = (count === Infinity) ? -1 : count;

        return memo[amount];
    }

    return dp(coins, amount, memoSet);
};

/* =========================================================
=       Solution 2. bottom-top dp iteration: O(kn)         =
========================================================= */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    if (amount === 0) {
        return 0
    };

    let dp = new Array(amount + 1).fill(Infinity);

    // base case
    dp[0] = 0;

    for (let i = 0; i < coins.length; ++i) {
        for (let j = coins[i]; j <= amount; ++j) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount];
};
