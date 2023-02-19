/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. stack iteration: O(n)                  =
========================================================= */

// based on problem 102. binary-tree-level-order-traversal.js

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
	if (root === null) {
		return [];
	}

	const result = [];
	const stack = [[root]];
	let curNodes, ltr = true;

	while (stack.length) {
		let curLevel = [];
		let curChilds = [];

		curNodes = stack.pop();

		for (let i = 0; i < curNodes.length; ++i) {
			if (ltr) {
				curLevel.push(curNodes[i].val);
			} else {
				curLevel.unshift(curNodes[i].val);
			}

			if (curNodes[i].left) {
				curChilds.push(curNodes[i].left);
			}

			if (curNodes[i].right) {
				curChilds.push(curNodes[i].right);
			}
		}

		result.push(curLevel);

		if (curChilds.length) {
			stack.push(curChilds);
		}

		ltr = !ltr;
	}

	return result;
};
