/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* =========================================================
=       Solution 1. pre-order recursion: O(n)              =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    if (root === null) {
        return [];
    }

    let result = [root.val];
    result.push(...preorderTraversal(root.left));
    result.push(...preorderTraversal(root.right));

    return result;
};

/* =========================================================
=       Solution 2. stack iteration: O(n)                  =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    if (root === null) {
        return [];
    }

    let result = [];
    let stack = [root];
    let curNode;

    while (stack.length) {
        curNode = stack.pop();
        result.push(curNode.val);

        if (curNode.right) {
            stack.push(curNode.right);
        }

        if (curNode.left) {
            stack.push(curNode.left);
        }
    }

    return result;
};
