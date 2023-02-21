/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/* =========================================================
=       Solution 1. dfs: O(n)                              =
========================================================= */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
	const visited = {};

	/**
	 * @param {Node} node
	 * @return {Node}
	 */
	const dfs = (node) => {
		if (node === null) return node;

		if (visited[node.val]) return visited[node.val];

		const root = new Node(node.val);

		visited[node.val] = root;
		node.neighbors.forEach((n) => root.neighbors.push(dfs(n)));

		return root;
	};

	return dfs(node);
};
