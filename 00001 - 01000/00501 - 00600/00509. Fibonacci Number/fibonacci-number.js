/* =========================================================
=       Solution 1. top-bottom with dp table: O(n)         =
========================================================= */

/**
 * @param {object} memo
 * @return {number}
 */
const dp = (memo, n) => {
	if (n === 0 || n === 1) {
		return n;
	}

	if (memo[n]) {
		return memo[n];
	}

	memo[n] = dp(memo, n - 1) + dp(memo, n - 2);

	return memo[n];
};

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
	const memoSet = {};

	return dp(memoSet, n);
};

/* =========================================================
=       Solution 2.v1. bottom-top dp iteration: O(n)       =
========================================================= */

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
	if (n === 0 || n === 1) {
		return n;
	}

	const dp = Array(n);

	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; ++i) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n - 1];
};

/* =========================================================
=       Solution 2.v2. bottom-top dp iteration: O(n)       =
========================================================= */

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
	if (n === 0 || n === 1) {
		return n;
	}

	// base case
	let dpPrevFirst = 0;
	let dpPrevSecond = 1;

	for (let i = 2; i <= n; ++i) {
		[dpPrevFirst, dpPrevSecond] = [dpPrevSecond, dpPrevFirst + dpPrevSecond];
	}

	return dpPrevSecond;
};

/* =========================================================
=       Solution 3. O(log n)                               =
========================================================= */

// Reference:
// https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
	const result = Array(30).fill(0);

	/**
	 * @param {number} n
	 * @return {number}
	 */
	const fibMatrix = (n) => {
		if (n === 0) return 0;
		if (n === 1 || n === 2) return (result[n] = 1);

		if (result[n]) return result[n];

		// if (n & 1) is true, n is a odd number.
		const k = n & 1 ? (n + 1) >> 1 : n >> 1;

		result[n] =
			n & 1
				? fibMatrix(k) * fibMatrix(k) + fibMatrix(k - 1) * fibMatrix(k - 1)
				: (2 * fibMatrix(k - 1) + fibMatrix(k)) * fibMatrix(k);

		return result[n];
	};

	return fibMatrix(n);
};
