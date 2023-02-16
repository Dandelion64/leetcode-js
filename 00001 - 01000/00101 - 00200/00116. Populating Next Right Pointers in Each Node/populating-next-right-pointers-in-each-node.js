/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/* =========================================================
=       Solution 1. pre-order recursion: O(n)              =
========================================================= */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
	if (root === null) return null;

	/**
	 * @param {TreeNode} node1
	 * @param {TreeNode} node2
	 * @return {TreeNode}
	 */
	const traverse = (node1, node2) => {
		if (node1 === null || node2 === null) return;

		node1.next = node2;

		traverse(node1.left, node1.right);
		traverse(node1.right, node2.left);
		traverse(node2.left, node2.right);
	};

	traverse(root.left, root.right);
	return root;
};
