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

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {TreeNode}
 */
const helper = (nums, start, end) =>{
	if (start > end) return null;

	const mid = (start + end) >> 1;
	const root = new TreeNode(nums[mid]);

	root.left = helper(nums, start, mid - 1);
	root.right = helper(nums, mid + 1, end);

	return root;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (nums.length === 0) return null;

	return helper(nums, 0, nums.length - 1);
};
