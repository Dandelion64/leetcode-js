/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/* =========================================================
=       Solution 1. pre-order: O(n)                        =
========================================================= */

// slow

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
	let result = [];

	/**
	 * @param {TreeNode} node
	 */
	const dfs = (node) => {
		if (node === null) {
			result.push(null);
			return;
		}

		result.push(node.val);

		dfs(node.left);
		dfs(node.right);
	};

	dfs(root);

	return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
	const nodes = data.split(',');

	/**
	 * @param {string[]} nodes
	 * @return {TreeNode}
	 */
	const dfs = (nodes) => {
		if (nodes.length === 0 || nodes[0] === '') {
            nodes.shift();
			return null;
		}

		const node = new TreeNode(Number(nodes.shift()));

		node.left = dfs(nodes);
		node.right = dfs(nodes);

		return node;
	};

	return dfs(nodes);
};
