/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. in-order recursion: O(n)               =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = (root) => {
	let result = Infinity;
	let prev = null;

	/**
	 * @param {TreeNode} node
	 * @return {number}
	 */
	const traverse = (node) => {
		if (node === null) return;

        traverse(node.left);

		if (prev !== null) {
            result = Math.min(result, node.val - prev);
		}

		prev = node.val;

		traverse(node.right);
	};

	traverse(root);

	return result;
};
