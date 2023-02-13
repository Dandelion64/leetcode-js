/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/* =========================================================
=       Solution 1. O(1)                                   =
========================================================= */

class RandomizedSet {
	constructor() {
        this.nums = new Array();
        this.valToIndexMap = new Map();
    }

	/**
	 * @param {number} val
	 * @return {boolean}
	 */
	insert(val) {
        if (this.valToIndexMap.has(val)) return false;

        // push to the tail of the array.
        this.valToIndexMap.set(val, this.nums.length);
        this.nums.push(val);

        return true;
    }

	/**
	 * @param {number} val
	 * @return {boolean}
	 */
	remove(val) {
        if (!this.valToIndexMap.has(val)) return false;

        const index = this.valToIndexMap.get(val);

        // move to the tail of the array.
        this.nums[index] = this.nums[this.nums.length - 1];
        this.valToIndexMap.set(this.nums[this.nums.length - 1], index);
        [this.nums[index], this.nums[this.nums.length - 1]] = [
            this.nums[this.nums.length - 1],
            this.nums[index]
        ];
        this.valToIndexMap.delete(val);
        this.nums.pop();

        return true;
    }

	/**
	 * @return {number}
	 */
	getRandom() {
        return this.nums[Math.floor(Math.random() * this.nums.length)];
    }
}
