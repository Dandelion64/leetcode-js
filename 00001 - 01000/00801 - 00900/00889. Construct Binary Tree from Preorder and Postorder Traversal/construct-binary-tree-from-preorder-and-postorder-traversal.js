/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. pre-order/post-order recursion: O(n)   =
========================================================= */

// notice that you cannot certain a tree by pre-order and post-order.

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = (preorder, postorder) => {
	const valToIndex = new Map();

	/**
	 * @param {number[]} postorder
	 * @return {TreeNode}
	 */
	const buildMap = (postorder) => {
		for (let i = 0; i < postorder.length; ++i) {
			valToIndex.set(postorder[i], i);
		}
	};

	/**
	 * @param {number[]} preorder
	 * @param {number} preStart
	 * @param {number} preEnd
	 * @param {number[]} postorder
	 * @param {number} postStart
	 * @param {number} postEnd
	 * @return {TreeNode}
	 */
	const build = (preorder, preStart, preEnd, postorder, postStart, postEnd) => {
		if (preStart > preEnd) return null;
		if (preStart === preEnd) return new TreeNode(preorder[preStart]);

		const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
		const leftRootVal = preorder[preStart + 1];
		const index = valToIndex.get(leftRootVal);
		const leftSize = index - postStart + 1; // the number of nodes in the left branch

		root.left = build(preorder, preStart + 1, preStart + leftSize, postorder, postStart, index);
		root.right = build(preorder, preStart + leftSize + 1, preEnd, postorder, index + 1, postEnd - 1);

		return root;
	};

	buildMap(postorder);

	return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1);
};
