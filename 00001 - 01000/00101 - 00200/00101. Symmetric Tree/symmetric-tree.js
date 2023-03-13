/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
const revertTree = (node) => {
	if (node === null || (node.left === null && node.right === null)) return node;

	const temp = revertTree(node.left);
	node.left = revertTree(node.right);
	node.right = temp;

	return node;
};

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
const isSameTree = (left, right) => {
	if (left === null && right === null) return true;

	if ((left === null && right !== null) || (right === null && left !== null)) return false;

	if (left.val !== right.val) return false;

	return isSameTree(left.right, right.right) && isSameTree(left.left, right.left);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
	root.right = revertTree(root.right);

	return isSameTree(root.left, root.right);
};

/* =========================================================
=       Solution 2. O(n)                                   =
========================================================= */

// optimized

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
const symmetryHelper = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;

    return symmetryHelper(left.left, right.right) && symmetryHelper(left.right, right.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    if (root === null) return true;

    return symmetryHelper(root.left, root.right);
};
