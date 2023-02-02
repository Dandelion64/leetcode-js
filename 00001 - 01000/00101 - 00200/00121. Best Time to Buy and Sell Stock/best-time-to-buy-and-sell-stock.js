/* =========================================================
=       Solution 1. fast-slow pointers: O(n)               =
========================================================= */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let result = 0;
	let profit = 0;

	// fast: i, slow: i - 1.
	for (let i = 1; i < prices.length; ++i) {
		profit = Math.max(0, profit + prices[i] - prices[i - 1]);
		result = Math.max(result, profit);
	}

	return result;
};

/* =========================================================
=       Solution 2.v1. bottom-top dp iteration: O(n)       =
========================================================= */

// slow

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
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
			dp[i][1] = -prices[i];
			/*
                dp[i][1]
                    = max(dp[-1][1], dp[-1][0] - prices[i])
                    = max(-infinity, 0 - prices[i])
                    = -prices[i]
            */
			continue;
		}

		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
	}

	return dp[n - 1][0];
};

/* =========================================================
=       Solution 2.v2. bottom-top dp iteration: O(n)       =
========================================================= */

// optimized

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	const n = prices.length;

	// base case
	let dp_i_0 = 0;
	let dp_i_1 = -Infinity;

	for (let i = 0; i < n; ++i) {
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
		dp_i_1 = Math.max(dp_i_1, -prices[i]);
	}

	return dp_i_0;
};
