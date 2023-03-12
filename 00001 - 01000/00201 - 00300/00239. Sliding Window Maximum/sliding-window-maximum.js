/* =========================================================
=       Solution 1. monotonic queue: O(n)                  =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
	const result = [];
	const window = [];

	for (let end = 0; end < nums.length; ++end) {
		while (nums[end] > window.at(-1)) {
			window.pop();
		}

		window.push(nums[end]);

		const start = end - k + 1;

		if (start >= 0) {
			result.push(window[0]);

            if (nums[start] === window[0]) {
                window.shift();
            }
		}
	}

	return result;
};
