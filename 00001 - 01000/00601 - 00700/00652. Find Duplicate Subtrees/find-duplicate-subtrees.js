/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. post-order recursion: O(n)              =
========================================================= */

// hash table

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = (root) => {
    const memo = new Map();
    const result = [];

    /**
     * @param {TreeNode} node
     * @return {TreeNode[]}
     */
    const traverse = (node) => {
        if (node === null) return '#';

        const left = traverse(node.left);
        const right = traverse(node.right);
        const subTree = left + ',' + right + ',' + node.val;

        if (memo.has(subTree)) {
            memo.set(subTree, memo.get(subTree) + 1);
        } else {
            memo.set(subTree, 0);
        }

        if (memo.get(subTree) === 1) {
            result.push(node);
        }

        return subTree;
    }

    traverse(root);

    return result;
};
