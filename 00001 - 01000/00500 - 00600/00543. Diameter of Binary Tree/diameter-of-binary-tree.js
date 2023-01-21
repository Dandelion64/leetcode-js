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
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    let maxDiameter = 0;

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    const maxDepth = (root) => {
        if (root === null) {
            return 0;
        }

        const leftMaxDepth = maxDepth(root.left);
        const rightMaxDepth = maxDepth(root.right);
        maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth);

        return Math.max(leftMaxDepth, rightMaxDepth) + 1; // 1 for root
    }

    maxDepth(root);

    return maxDiameter;
};
