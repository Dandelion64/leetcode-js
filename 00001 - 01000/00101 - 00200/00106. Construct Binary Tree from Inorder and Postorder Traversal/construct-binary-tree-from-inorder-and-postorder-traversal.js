/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. in-order/post-order recursion: O(n)    =
========================================================= */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
	const valToIndex = new Map();

	/**
	 * @param {number[]} inorder
	 * @return {TreeNode}
	 */
	const buildMap = (inorder) => {
		for (let i = 0; i < inorder.length; ++i) {
			valToIndex.set(inorder[i], i);
		}
	};

	/**
	 * @param {number[]} inorder
	 * @param {number} inStart
	 * @param {number} inEnd
	 * @param {number[]} inorder
	 * @param {number} inStart
	 * @param {number} inEnd
	 * @return {TreeNode}
	 */
	const build = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
		if (inStart > inEnd) return null;

		const rootVal = postorder[postEnd];
		const index = valToIndex.get(rootVal);
		const root = new TreeNode(rootVal);
		const leftSize = index - inStart; // the number of nodes in the left branch

		root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1);
		root.right = build(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1);

		return root;
	};

	buildMap(inorder);

	return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};
