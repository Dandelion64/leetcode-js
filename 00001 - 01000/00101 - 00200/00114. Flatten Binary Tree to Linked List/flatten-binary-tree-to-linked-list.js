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

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
	if (root === null) return;

	flatten(root.left);
	flatten(root.right);

	const left = root.left;
	const right = root.right;

	root.left = null;
	root.right = left;

	let cur = root;

	while (cur.right !== null) {
		cur = cur.right;
	}

	cur.right = right;
};
