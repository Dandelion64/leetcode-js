/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. pre-order/in-order recursion: O(n)     =
========================================================= */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
	const valToIndex = new Map();

	/**
	 * @param {number[]} preorder
	 * @param {number[]} inorder
	 * @return {TreeNode}
	 */
	const buildMap = (preorder, inorder) => {
		for (let i = 0; i < inorder.length; ++i) {
			valToIndex.set(inorder[i], i);
		}
	};

	/**
	 * @param {number[]} preorder
	 * @param {number} preStart
	 * @param {number} preEnd
	 * @param {number[]} inorder
	 * @param {number} inStart
	 * @param {number} inEnd
	 * @return {TreeNode}
	 */
	const build = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {
		if (preStart > preEnd) return null;

		const rootVal = preorder[preStart];
		const index = valToIndex.get(rootVal);
		const root = new TreeNode(rootVal);
		const leftSize = index - inStart; // the number of nodes in the left branch

		root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1);
		root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd);

		return root;
	};

	buildMap(preorder, inorder);

	return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
