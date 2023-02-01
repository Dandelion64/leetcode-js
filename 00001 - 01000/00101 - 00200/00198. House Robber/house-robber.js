/* =========================================================
=       Solution 1. bottom-top dp iteration: O(n)          =
========================================================= */

// dumb

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }

    const dp = Array.from({ length: n }, () => Array(2));

    // base case
    dp[0][0] = 0;
    dp[0][1] = nums[0];
    dp[1][0] = dp[0][1];
    dp[1][1] = nums[1];

    for (let i = 2; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]);
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][1]) + nums[i];
    }

    return Math.max(dp[n - 1][0], dp[n - 1][1]);
};

/* =========================================================
=       Solution 2.v1. bottom-top dp iteration: O(n)       =
========================================================= */

// slow

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }

    const dp = Array(n);

    // base case
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; ++i) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[n - 1];
}

/* =========================================================
=       Solution 2.v2. bottom-top dp iteration: O(n)       =
========================================================= */

// revised for boundary handling

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    const dp = Array(n + 2);

    // base case
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = n - 1; i >= 0; --i) {
        dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i]);
    }

    return dp[0];
}

/* =========================================================
=       Solution 2.v3. bottom-top dp iteration: O(n)       =
========================================================= */

// optimized

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    let dp_i_1 = 0, dp_i_2 = 0; // for dp[i + 1], dp[i + 2]
    let dp_i;

    for (let i = n - 1; i >= 0; --i) {
        dp_i = Math.max(dp_i_1, dp_i_2 + nums[i]);
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }

    return dp_i;
}

/* =========================================================
=       Solution 3. bottom-top dp iteration: O(n)          =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const n = nums.length;

    // base case
    let pre = 0;
    let cur = nums[0];
    let temp;

    for (let i = 1; i < n; ++i) {
        temp = cur;
        cur = Math.max(pre + nums[i], cur);
        pre = temp;
    }

    return cur;
}
