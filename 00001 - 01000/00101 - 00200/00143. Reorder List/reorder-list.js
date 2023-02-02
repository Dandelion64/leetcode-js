/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. fat-slow pointers: O(n)                =
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
	if (head === null || head.next === null || head.next.next === null) {
		return;
	}

	// find the middle node
	let slow = head, fast = head.next;

	while (fast && fast.next) {
		slow = moveSlow(slow);
		fast = moveFast(fast);
	}

	// reverse the latter half
	let prev = moveSlow(slow), tail = moveFast(slow);

	while (tail) {
		[tail.next, prev, tail] = [prev, tail, tail.next];
	}

	slow.next.next = null;
	slow.next = prev;

	// reorder by two-pointers
	let left = head, right = slow.next;
	slow.next = null;

	while (left && right) {
		[left.next, right.next, left, right] = [right, left.next, left.next, right.next];
	}

	return;
};

/* =========================================================
=       Solution 2. doubly linked list: O(n)               =
========================================================= */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
	if (head === null || head.next === null) {
		return;
	}

	let prev = head, tail = head.next, cur = head;

	while (tail) {
		[tail.prev, prev, tail] = [prev, tail, tail.next];
	}

	while (cur !== prev && cur.prev !== prev) {
		[cur.next, prev.next, prev, cur] = [prev, cur.next, prev.prev, cur.next];
	}

	cur.next = null;

	return;
};
