/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
	if (head === null) {
		return null;
	}

	let cur = head;
	let copy;

	while (cur) {
		copy = new Node(cur.val, cur.next, cur.random);
		cur.next = copy;
		cur = copy.next;
	}

	cur = head.next;

	while (cur) {
		if (cur.random) {
			cur.random = cur.random.next;
		}

		cur = cur.next ? cur.next.next : cur.next;
	}

	cur = head.next;
	copy = head.next;

	while (cur.next) {
		head.next = head.next.next;
		cur.next = cur.next.next;
		head = head.next;
		cur = cur.next;
	}

	head.next = null;

	return copy;
};
