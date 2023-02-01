/* =========================================================
=       Best Time to Buy and Sell Stock                    =
========================================================= */

function maxProfitAllInOne(k, prices, cooldown, fee) {
	const n = prices.length;

	if (k > n >> 1) {
		return maxProfitInfiniteK(prices, cooldown, fee);
	}

	const dp = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => [0, -Infinity]));

	for (let i = 0; i < n; ++i) {
		for (let j = k; j >= 1; --j) {
			if (i - 1 === -1) {
				// base case
				dp[i][j][0] = 0;
				dp[i][j][1] = -prices[i] - fee;
				continue;
			}

			if (i - cooldown - 1 < 0) {
				// base case
				dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
				dp[i][j][1] = Math.max(dp[i - 1][j][1], -prices[i] - fee);
				continue;
			}

			dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
			dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - cooldown - 1][j - 1][0] - prices[i] - fee);
		}
	}

	return dp[n - 1][k][0];
}

function maxProfitInfiniteK(prices, cooldown, fee) {
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
                    = max(dp[-1][1], dp[-1][0] - prices[i] - fee)
                    = max(-infinity, 0 - prices[i] - fee)
                    = -prices[i] - fee
            */
			continue;
		}

		if (i - cooldown - 1 < 0) {
			// base case
			dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
			dp[i][1] = Math.max(dp[i - 1][1], -prices[i] - fee);
			continue;
		}

		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - cooldown - 1][0] - prices[i] - fee);
	}

	return dp[n - 1][0];
}
