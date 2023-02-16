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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = (nums) => {
	/**
	 * @param {number[]} nums
	 * @param {number} low
	 * @param {number} high
	 * @return {TreeNode}
	 */
    const build = (nums, low, high) => {
        if (low > high) return null;

        let maxValue = Number.MIN_SAFE_INTEGER, index;

        for (let i = low; i <= high; ++i) {
            if (maxValue < nums[i]) {
                index = i;
                maxValue = nums[i];
            }
        }

        const root = new TreeNode(maxValue);
        root.left = build(nums, low, index - 1);
        root.right = build(nums, index + 1, high);

        return root;
    }

	return build(nums, 0, nums.length - 1);
};
