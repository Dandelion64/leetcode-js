/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. post-order recursion: O(n)             =
========================================================= */

// fast-slow pointers (linked-link is in ascending order)

/**
 * @param {ListNode} head
 * @param {ListNode} tail
 * @return {TreeNode}
 */
const helper = (head, tail) => {
	if (head === tail) return null;

	let slow = head, fast = head;

	while (fast !== tail && fast.next !== tail) {
		fast = fast.next.next;
		slow = slow.next;
	}

	const root = new TreeNode(slow.val);

	root.left = helper(head, slow);
	root.right = helper(slow.next, tail);

	return root;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
	if (head === null) return null;

	return helper(head, null);
};
