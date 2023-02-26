/* =========================================================
=       Solution 2. bottom-top dp iteration: O(n)          =
========================================================= */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
	const dp = Array.from({ length: word1.length + 1 }, () => Array(word2.length + 1).fill(0));

	for (let i = 1; i <= word1.length; ++i) {
		dp[i][0] = i; // base case
	}

	for (let i = 1; i <= word2.length; ++i) {
		dp[0][i] = i; // base case
	}

	for (let i = 1; i <= word1.length; ++i) {
		for (let j = 1; j <= word2.length; ++j) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j] + 1, // remove
					dp[i][j - 1] + 1, // insert
					dp[i - 1][j - 1] + 1 // change
				);
			}
		}
	}

	return dp[word1.length][word2.length];
};
