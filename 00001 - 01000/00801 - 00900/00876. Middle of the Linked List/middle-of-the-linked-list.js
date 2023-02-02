/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. fast-slow pointers: O(n)               =
========================================================= */

/**
 * @param {ListNode} slow
 * @return {ListNode}
 */
const moveSlow = (slow) => {
	return slow.next;
};

/**
 * @param {ListNode} fast
 * @return {ListNode}
 */
const moveFast = (fast) => {
	return fast.next.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = moveSlow(slow);
		fast = moveFast(fast);
	}

	return slow;
};
