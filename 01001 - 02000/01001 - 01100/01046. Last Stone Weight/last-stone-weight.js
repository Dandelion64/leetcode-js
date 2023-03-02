/* =========================================================
=       Solution 1. heap: O(n log n)                       =
========================================================= */

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
	while (stones.length > 1) {
		stones.sort((a, b) => b - a);

		const gravel = stones.shift() - stones.shift();

        if (gravel) {
			stones.push(gravel);
		}
	}

    return stones[0] || 0;
};
