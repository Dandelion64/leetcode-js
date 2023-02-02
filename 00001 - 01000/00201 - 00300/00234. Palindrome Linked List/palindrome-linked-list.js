/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. fast-slow pointer: O(n)                =
========================================================= */

// two-pointers, iteration

/**
 * leetcode problem 206. reverse-linked-list.js
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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
	let slow = head, fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	if (fast !== null) {
		slow = slow.next;
	}

	let left = head, right = reverseList(slow);

	while (right !== null) {
		if (left.val !== right.val) {
			return false;
		}

		left = left.next;
		right = right.next;
	}

	return true;
};
