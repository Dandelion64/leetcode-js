/* =========================================================
=       Solution 1. top-bottom with dp table: O(n^2)       =
========================================================= */

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = (scores, ages) => {
	const maps = ages.map((age, index) => [age, scores[index]]);

	maps.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

	const n = maps.length;

	let dp = new Array(n);
	let result = 0;

	for (let i = 0; i < n; ++i) {
		dp[i] = maps[i][1];

		for (let j = 0; j < i; ++j) {
			if (maps[i][1] >= maps[j][1]) {
				dp[i] = Math.max(dp[i], dp[j] + maps[i][1]);
			}
		}

		result = Math.max(result, dp[i]);
	}

	return result;
};
