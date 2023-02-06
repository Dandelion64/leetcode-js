/* =========================================================
=       Solution 1.v1. bottom-top dp iteration: O(n^2)     =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	const n = nums.length;

	if (n === 1) return 1;

	const dp = Array(n).fill(1); // base case: dp[0] = 1;

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < i; ++j) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	let result = 0;

	for (let i = 0; i < dp.length; ++i) {
		result = Math.max(result, dp[i]);
	}

	return result;
};

/* =========================================================
=       Solution 1.v2. bottom-top dp iteration: O(n^2)     =
========================================================= */

// spread operator

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	const n = nums.length;

	if (n === 1) return 1;

	const dp = Array(n).fill(1); // base case: dp[0] = 1;

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < i; ++j) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	return Math.max(...dp);
};

/* =========================================================
=       Solution 2.v1. bottom-top dp iteration: O(n^2)     =
========================================================= */

// stack & greedy algorithm, similar to Vue: DOM diff

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	const n = nums.length;

	if (n === 1) return 1;

	const stack = [];

	/**
	 * @param {number[]} arr
	 * @return {number}
	 */
	const getTopEle = (arr) => {
		if (arr.length === 0) return 0;
		return arr[arr.length - 1];
	};

	/**
	 * @param {number[]} arr
	 * @param {number} n
	 * @return {number}
	 */
	const findNextEle = (arr, n) => {
		return arr.findIndex((item) => item >= n);
	};

	for (let i = 0; i < n; ++i) {
		if (stack.length === 0 || getTopEle(stack) < nums[i]) {
			stack.push(nums[i]);
		} else {
			const index = findNextEle(stack, nums[i]);
			stack[index] = nums[i];
		}
	}
	return stack.length;
};

/* =========================================================
=       Solution 2.v2. bottom-top dp iteration: O(n log n) =
========================================================= */

// findNextEle() by binary search

/** notice that stack[] may be just as long as LIS but elements are wrong.
 * test case: [4, 2, 4, 5, 3, 7]
 * stack = [2, 3, 5, 7], LIS = [2, 4, 5, 7]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
	const n = nums.length;

	if (n === 1) return 1;

	const stack = [];

	/**
	 * @param {number[]} arr
	 * @return {number}
	 */
	const getTopEle = (arr) => {
		if (arr.length === 0) return 0;
		return arr[arr.length - 1];
	};

	/**
	 * @param {number[]} arr
	 * @param {number} n
	 * @return {number}
	 */
	const findNextEle = (arr, n) => {
		let left = 0, right = arr.length, mid;

		while (left < right) {
			mid = (left + right) >>> 1;

			if (arr[mid] < n) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}

		return right;
	};

	for (let i = 0; i < n; ++i) {
		if (stack.length === 0 || getTopEle(stack) < nums[i]) {
			stack.push(nums[i]);
		} else {
			const index = findNextEle(stack, nums[i]);
			stack[index] = nums[i];
		}
	}
	return stack.length;
};
