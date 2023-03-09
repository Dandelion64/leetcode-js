/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* =========================================================
=       Solution 1. fast-slow pointers: O(n)               =
========================================================= */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
	if (head === null || head.next === null) return null;

	let fast = head, slow = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast === slow) break;
	}

	if (fast == null || fast.next == null) return null;

    slow = head;

    while (fast !== slow) {
        fast = fast.next;
		slow = slow.next;
    }

	return slow;
};
