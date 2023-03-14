/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. dfs: O(n)                              =
========================================================= */

/**
 * @param {number} cur
 * @param {TreeNode} root
 * @return {number}
 */
const dfs = (root, accum) => {
	if (root === null) return 0;

	accum = accum * 10 + root.val;

	if (root.left === null && root.right === null) return accum;

	return dfs(root.left, accum) + dfs(root.right, accum);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = (root) => {
    return dfs(root, 0);
};
