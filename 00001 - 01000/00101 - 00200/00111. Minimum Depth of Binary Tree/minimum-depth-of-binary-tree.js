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
const minDepth = (root) => {
    if (root === null) {
        return 0;
    }

    if (root.left === null) {
        return minDepth(root.right) + 1; // 1 for root
    }

    if (root.right === null) {
        return minDepth(root.left) + 1; // 1 for root
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1; // 1 for root
};

/* =========================================================
=       Solution 2. BFS: O(n)                              =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
    if (root === null) {
        return 0;
    }

    const queue = [root];
    let cur;
    let depth = 1;

    while (queue.length) {
        const n = queue.length;

        for (let i = 0; i < n; ++i) {
            cur = queue.shift();

            if (cur.left === null && cur.right === null) {
                return depth;
            }

            if (cur.left !== null) {
                queue.push(cur.left);
            }

            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }

        ++depth;
    }

    return depth;
};
