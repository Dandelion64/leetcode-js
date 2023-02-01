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
 * @param {TreeNode} root
 * @return {number}
*/
const rob = (root) => {
	const result = dp(root);

	return Math.max(result[0], result[1]);
};

/**
 * @param {TreeNode} root
 * @return {number}
*/
const dp = (root) => {
    if (root === null) {
        return [0, 0];
    }

    const left = dp(root.left);
    const right = dp(root.right);
    const resultDontRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    const resultRob = root.val + left[0] + right[0];

    return [resultDontRob, resultRob];
};
