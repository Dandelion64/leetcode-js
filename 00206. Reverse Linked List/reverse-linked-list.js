/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* ================================================================================ */

/**
 * Solution 1. Iteration: O(n)
 */

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

/* ================================================================================ */

/**
 * Solution 2. Recursion: O(n)
 */

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
