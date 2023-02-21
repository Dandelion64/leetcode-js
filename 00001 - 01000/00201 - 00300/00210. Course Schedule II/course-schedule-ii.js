/* =========================================================
=       Solution 1.v1. dfs: O(n + m)                       =
========================================================= */

// topological sorting

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
	const result = [];

	// problem 207. course-schedule.js
	/**
	 * @param {number} numCourses
	 * @param {number[][]} prerequisites
	 * @return {boolean}
	 */
	const canFinish = (numCourses, prerequisites) => {
		/**
		 * @param {number} numCourses
		 * @param {number[][]} prerequisites
		 * @return {boolean}
		 */
		const buildGraph = (numCourses, prerequisites) => {
			const graph = Array.from({ length: numCourses }, () => []);

			for (const edge of prerequisites) {
				// from: edge[1]
				// to: edge[0]
				graph[edge[1]].push(edge[0]);
			}

			return graph;
		};

		const graph = buildGraph(numCourses, prerequisites);
		const visited = Array(numCourses);
		const onPath = Array(numCourses);
		let isCyclic = false;

		/**
		 * @param {number} numCourses
		 * @param {number[][]} prerequisites
		 * @return {boolean}
		 */
		const traverse = (graph, s) => {
			if (onPath[s]) {
				isCyclic = true;
			}

			if (visited[s] || isCyclic) return;

			visited[s] = true;
			onPath[s] = true;

			for (const t of graph[s]) {
				traverse(graph, t);
			}

			// post-order
			result.unshift(s);

			onPath[s] = false;
		};

		for (let i = 0; i < numCourses; ++i) {
			traverse(graph, i);
		}

		return !isCyclic;
	};

	if (!canFinish(numCourses, prerequisites)) return [];

	return result;
};

/* =========================================================
=       Solution 1.v1. dfs: O(n + m)                       =
========================================================= */

// simplified v1

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
	/**
	 * @param {number} numCourses
	 * @param {number[][]} prerequisites
	 * @return {boolean}
	 */
	const buildGraph = (numCourses, prerequisites) => {
		const graph = Array.from({ length: numCourses }, () => []);

		for (const edge of prerequisites) {
			// from: edge[1]
			// to: edge[0]
			graph[edge[1]].push(edge[0]);
		}

		return graph;
	};

    const result = [];
	const graph = buildGraph(numCourses, prerequisites);
	const visited = Array(numCourses);
	const onPath = Array(numCourses);
	let isCyclic = false;

	/**
	 * @param {number} numCourses
	 * @param {number[][]} prerequisites
	 * @return {boolean}
	 */
	const traverse = (graph, s) => {
		if (onPath[s]) {
			isCyclic = true;
		}

		if (visited[s] || isCyclic) return;

		visited[s] = true;
		onPath[s] = true;

		for (const t of graph[s]) {
			traverse(graph, t);
		}

		// post-order
		result.unshift(s);

		onPath[s] = false;
	};

	for (let i = 0; i < numCourses; ++i) {
		traverse(graph, i);
	}

	if (isCyclic) return [];

	return result;
};

/* =========================================================
=       Solution 2. bfs: O(n + m)                          =
========================================================= */

// topological sorting

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
	/**
	 * @param {number} numCourses
	 * @param {number[][]} prerequisites
	 * @return {boolean}
	 */
	const buildGraph = (numCourses, prerequisites) => {
		const graph = Array.from({ length: numCourses }, () => []);

		for (const edge of prerequisites) {
			// from: edge[1]
			// to: edge[0]
			graph[edge[1]].push(edge[0]);
		}

		return graph;
	};

	const graph = buildGraph(numCourses, prerequisites);
    const indegree = Array(numCourses).fill(0);

    for (const edge of prerequisites) {
		++indegree[edge[0]];
	}

	const queue = [];

    for (let i = 0; i < numCourses; ++i) {
		if (indegree[i] === 0) {
			queue.push(i);
		}
	}

    const result = [];
    let count = 0;

	while (queue.length) {
		const cur = queue.shift();

        result[count] = cur;
		++count;

		for (const neighbor of graph[cur]) {
			--indegree[neighbor];

			if (indegree[neighbor] === 0) {
				queue.push(neighbor);
			}
		}
	}

    if (count !== numCourses) return [];

	return result;
};
