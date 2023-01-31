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
}

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    const memoSet = {};

    return dp(memoSet, n);
};

/* =========================================================
=       Solution 2. bottom-top dp iteration: O(n)          =
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
