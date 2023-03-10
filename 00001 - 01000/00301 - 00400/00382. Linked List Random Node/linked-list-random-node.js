/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

/* =========================================================
=       Solution 1.                                        =
========================================================= */

class Solution {
	/**
	 * @param {ListNode} head
	 */
	constructor(head) {
		this.head = head;
		this.elements = this.generateElements();
	}

	/**
	 * @return {number[]}
	 */
	generateElements() {
		const result = [];
        let cur = this.head;

		while (cur) {
			result.push(cur.val);
			cur = cur.next;
		}

		return result;
	}

	/**
	 * @return {number}
	 */
	getRandom() {
		return this.elements[Math.floor(Math.random() * this.elements.length)];
	}
}

/* =========================================================
=       Solution 2.                                        =
========================================================= */

// Ref: reservoir sampling

class Solution {
	/**
	 * @param {ListNode} head
	 */
	constructor(head) {
		this.head = head;
    }

	/**
	 * @return {number}
	 */
	getRandom() {
		let count = 0, reserve = 0;
        let cur = this.head;

        while (cur) {
            ++count;

            if (Math.floor(Math.random() * count) + 1 === count) {
                reserve = cur.val;
            }

            cur = cur.next;
        }

        return reserve;
	}
}
