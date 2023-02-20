/* =========================================================
=       Solution 1. backtracking: O(n * 2 ^ n)             =
========================================================= */

// fast

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = (graph) => {
	const result = [];
	const path = [];

	/**
	 * @param {number[][]} graph
	 * @param {number} s
	 * @param {number[]} path
	 */
	const traverse = (graph, s, path) => {
		path.push(s);

		const n = graph.length;

		if (s === n - 1) result.push(path.slice()); // slice retrun a new array

		for (let v of graph[s]) {
			traverse(graph, v, path);
		}

		path.pop();
	};

	traverse(graph, 0, path);

	return result;
};

/* =========================================================
=       Solution 2. backtracking: O(n * 2 ^ n)             =
========================================================= */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = (graph) => {
	const result = [];
	const path = [0];

	/**
	 * @param {number[]} path
	 */
	const dfs = (path) => {
		const cur = path.at(-1); // array.prototype.at()

		if (cur === graph.length - 1) {
			result.push([...path]);
			return;
		}

		for (const v of graph[cur]) {
			path.push(v);
			dfs(path);
			path.pop();
		}
	};

	dfs(path);

	return result;
};
