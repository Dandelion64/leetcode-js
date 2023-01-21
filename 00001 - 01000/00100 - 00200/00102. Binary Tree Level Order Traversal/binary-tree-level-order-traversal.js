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

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    if (root === null) {
        return [];
    }

    let result = [];
    let stack = [[root]];
    let curNodes;

    while (stack.length) {
        let curLevel = [];
        let curChilds = [];

        curNodes = stack.pop();

        for (let i = 0; i < curNodes.length; ++i) {
            curLevel.push(curNodes[i].val);

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
    }

    return result;
}

/* =========================================================
=       Solution 2. queue iteration: O(n)                  =
========================================================= */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    if (root === null) {
        return [];
    }

    let result = [];
    let queue = [root];
    let curNode;

    while (queue.length) {
        let curLevel = [];
        const n = queue.length

        for (let i = 0; i < n; ++i) {
            curNode = queue.shift();
            curLevel.push(curNode.val);

            if (curNode.left) {
                queue.push(curNode.left);
            }

            if (curNode.right) {
                queue.push(curNode.right);
            }
        }

        result.push(curLevel);
    }

    return result;
}
