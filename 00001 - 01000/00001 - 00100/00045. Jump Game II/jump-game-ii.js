/* =========================================================
=       Solution 1. O(n ^ 2)                               =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
	const n = nums.length;
	let index = n - 1;
	let step = 0;

	while (index) {
		for (let i = 0; i < n; ++i) {
			if (i + nums[i] >= index) {
				++step;
				index = i;
				break;
			}
		}
	}

	return step;
};

/* =========================================================
=       Solution 2. Greedy: O(n)                           =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
	const n = nums.length;
	let cur = 0, curMax = 0;
	let step = 0;

	for (let i = 0; i < n - 1; ++i) {
		curMax = Math.max(curMax, i + nums[i]);

        if (i === cur) {
            cur = curMax;
            ++step;
        }
	}

	return step;
};
