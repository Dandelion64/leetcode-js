/* =========================================================
=       Solution 1. hash table: O(n)                       =
========================================================= */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
	}

	const keys = Object.keys(map); // an array instance

	keys.sort((a, b) => map[b] - map[a]);

	return keys.slice(0, k).map(Number);
};
