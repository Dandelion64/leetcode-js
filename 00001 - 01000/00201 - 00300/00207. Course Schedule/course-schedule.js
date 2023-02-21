/* =========================================================
=       Solution 1.v1. dfs: O(n + m)                       =
========================================================= */

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

		onPath[s] = false;
	};

	for (let i = 0; i < numCourses; ++i) {
		traverse(graph, i);
	}

	return !isCyclic;
};

/* =========================================================
=       Solution 1.v2. dfs: O(n + m)                       =
========================================================= */

// Ref: https://github.com/Tcdian/LeetCode/blob/master/LeetCode/Topological%20Sort/207.%20Course%20Schedule.js.md

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
	const INITIAL = 0;
	const VISITING = 1;
	const VISITED = 2;
	const graph = Array.from({ length: numCourses }, () => []);
	const status = new Array(numCourses).fill(INITIAL);

	for (let i = 0; i < prerequisites.length; i++) {
		graph[prerequisites[i][1]].push(prerequisites[i][0]);
	}

	/**
	 * @param {number[][]} graph
	 * @param {number} course
	 * @return {boolean}
	 */
	const isCyclic = (graph, course) => {
		if (status[course] === VISITED) {
			return false;
		}

		if (status[course] === VISITING) {
			return true;
		}

		status[course] = VISITING;

		for (let i = 0; i < graph[course].length; i++) {
			if (isCyclic(graph, graph[course][i])) {
				return true;
			}
		}

		status[course] = VISITED;

		return false;
	};

	for (let i = 0; i < numCourses; i++) {
		if (isCyclic(graph, i)) {
			return false;
		}
	}

	return true;
};

/* =========================================================
=       Solution 2. bfs: O(n + m)                          =
========================================================= */

// topological sorting

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

	let count = 0;

	while (queue.length) {
		const cur = queue.shift();

		++count;

		for (const neighbor of graph[cur]) {
			--indegree[neighbor];

			if (indegree[neighbor] === 0) {
				queue.push(neighbor);
			}
		}
	}

	return count === numCourses;
};
