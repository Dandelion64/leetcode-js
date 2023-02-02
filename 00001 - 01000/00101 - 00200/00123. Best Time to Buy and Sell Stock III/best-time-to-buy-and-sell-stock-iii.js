/* =========================================================
=       Solution 1.v1. bottom-top dp iteration: O(n)       =
========================================================= */

// slow

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	const n = prices.length;
	const K = 2;

	const dp = Array.from({ length: n }, () => Array.from({ length: K }, () => Array(2)));

	for (let i = 0; i < n; ++i) {
		for (let k = K; k >= 1; --k) {
			if (i - 1 === -1) {
				// base case
				dp[i][k - 1][0] = 0;
				dp[i][k - 1][1] = -prices[i];
				continue;
			}

			if (k - 2 === -1) {
				// base case
				dp[i][k - 1][0] = Math.max(dp[i - 1][k - 1][0], dp[i - 1][k - 1][1] + prices[i]);
				dp[i][k - 1][1] = Math.max(dp[i - 1][k - 1][1], -prices[i]);
				continue;
			}

			dp[i][k - 1][0] = Math.max(dp[i - 1][k - 1][0], dp[i - 1][k - 1][1] + prices[i]);
			dp[i][k - 1][1] = Math.max(dp[i - 1][k - 1][1], dp[i - 1][k - 2][0] - prices[i]);
		}
	}

	return dp[n - 1][K - 1][0];
};

/* =========================================================
=       Solution 1.v2. bottom-top dp iteration: O(n)       =
========================================================= */

// optimized

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	const n = prices.length;

	// base case
	let dp_i_1_0 = 0;
	let dp_i_1_1 = -Infinity;
	let dp_i_2_0 = 0;
	let dp_i_2_1 = -Infinity;

	for (let i = 0; i < n; ++i) {
		dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
		dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);
		dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
		dp_i_1_1 = Math.max(dp_i_1_1, -prices[i]);
	}

	return dp_i_2_0;
};
