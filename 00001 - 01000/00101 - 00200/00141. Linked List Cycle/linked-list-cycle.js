/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* =========================================================
=       Solution 1. flag (hash table): O(n)                =
========================================================= */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
	if (head === null || head.next === null) {
		return false;
	}

	while (head) {
		if (head.flag) {
			return true;
		}

		head.flag = true;
		head = head.next;
	}

	return false;
};

/* =========================================================
=       Solution 2. fast-slow pointers: O(n)               =
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
 * @return {boolean}
 */
const hasCycle = (head) => {
	if (head === null || head.next === null) {
		return false;
	}

	let slow = moveSlow(head);
	let fast = moveFast(head);

	if (fast === null) {
		return false;
	}

	while (slow !== fast) {
		if (fast.next === null) {
			return false;
		}

		slow = moveSlow(slow);
		fast = moveFast(fast);

		if (slow === null || fast === null) {
			return false;
		}
	}

	return true;
};
