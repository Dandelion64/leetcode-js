/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. recursion: O(n)                        =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
	/**
	 * @param {TreeNode} root
	 * @return {TreeNode}
	 */
	const traverse = (root) => {
		if (root === null) return;

		const temp = root.left;
		root.left = root.right;
		root.right = temp;

		traverse(root.left);
		traverse(root.right);
	};

	traverse(root);
	return root;
};

/* =========================================================
=       Solution 2. recursion: O(n)                        =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    if (root === null) return null;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};
