/* =========================================================
=       Solution 1. bottom-top dp iteration: O(kn)         =
========================================================= */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
    if (amount === 0) return 1;

    const dp = Array(amount + 1).fill(0);

    // base case
	dp[0] = 1;

    for (let i = 0; i < coins.length; ++i) {
		for (let j = coins[i]; j <= amount; ++j) {
			dp[j] = dp[j] + dp[j - coins[i]];
		}
	}

    return dp[dp.length - 1];
};
