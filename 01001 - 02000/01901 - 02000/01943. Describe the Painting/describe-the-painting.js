/* =========================================================
=       Solution 1. prefix sum (diff): O(n)                =
========================================================= */

/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
const splitPainting = (segments) => {
	const sum = {};

	for (const [start, end, value] of segments) {
		sum[start] = (sum[start] || 0) + value;
		sum[end] = (sum[end] || 0) - value;
	}

	const keys = Object.keys(sum).map(Number);

	keys.sort((a, b) => a - b);

	const result = [];
	let pre = 0, s = 0;

	for (let i = 0; i < keys.length; ++i) {
		const k = keys[i];

		if (s) {
			result.push([pre, k, s]);
		}

		s += sum[k];
		pre = k;
	}

	return result;
};
