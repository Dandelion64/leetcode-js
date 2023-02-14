/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

/* =========================================================
=       Solution 1. O(1)                                   =
========================================================= */

// based on problem 380. insert-delete-getrandom-o1.js
// we can move those in blacklist to the tail of the array

class Solution {
	/**
	 * @param {number} n
	 * @param {number[]} blacklist
	 */
	constructor(n, blacklist) {
		this.size = n - blacklist.length;
		this.map = this.generateMap(n, blacklist);
	}

	/**
	 * @param {number} n
	 * @param {number[]} blacklist
	 */
	generateMap(n, blacklist) {
		const map = new Map();

		for (let black of blacklist) {
			map.set(black, -1);
		}

		let last = n - 1;

		for (let black of blacklist) {
			if (black >= this.size) {
				continue; // black is already in the [size, n)
			}

			while (map.has(last)) {
				--last;
			}

			map.set(black, last);
			--last;
		}

		return map;
	}

	/**
	 * @return {number}
	 */
	pick() {
		const index = Math.floor(Math.random() * this.size);

		if (this.map.has(index)) {
			return this.map.get(index);
		}

		return index;
	}
}
