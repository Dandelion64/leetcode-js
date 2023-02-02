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
 * @param {ListNode} node
 * @return {ListNode}
 */
const movePointer = (node) => {
	return node.next;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
	if (head === null) {
		return head;
	}

	const dummyHead = new ListNode(0);
	dummyHead.next = head;

	let slow = dummyHead;
	let fast = head;

	while (n > 0) {
		fast = movePointer(fast);
		--n;
	}

	while (fast) {
		slow = movePointer(slow);
		fast = movePointer(fast);
	}

	if (slow.next) {
		slow.next = movePointer(slow.next);
	}

	return dummyHead.next;
};
