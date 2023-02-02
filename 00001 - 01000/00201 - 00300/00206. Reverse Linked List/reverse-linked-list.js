/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1.v1. recursion: O(n)                     =
========================================================= */

// slow

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head, prev = null) => {
	if (!head) {
		return prev;
	}

	const next = head.next;
	head.next = prev;

	return reverseList(next, head);
};

/* =========================================================
=       Solution 1.v2. recursion: O(n)                     =
========================================================= */

// slow

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
	if (head === null || head.next === null) {
		return head;
	}

	const last = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return last;
};

/* =========================================================
=       Solution 2. iteration: O(n)                        =
========================================================= */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
	let prev = null;

	while (head) {
		[head.next, prev, head] = [prev, head, head.next];
	}

	return prev;
};
