/* =========================================================
=       Solution 1. union find: O(n)                       =
========================================================= */

// Ref: https://dev.to/samuelhinchliffe/684-redundant-connection-33i5

class UnionFind {
	/**
	 * @param {number[][]} edges
	 */
	constructor(edges) {
		this.ranks = Array(edges.length).fill(1);
		this.parents = Array.from(Array(edges.length).keys());
	}

	/**
	 * @param {number} index
	 */
	find(index) {
		let parent = this.parents[index];

		while (parent !== this.parents[parent]) {
			parent = this.parents[this.parents[parent]];
		}

		return parent;
	}

	/**
	 * @param {number} index1
	 * @param {number} index2
	 * @return {boolean}
	 */
	union(index1, index2) {
		const parentIndex1 = this.find(index1);
		const parentIndex2 = this.find(index2);

		if (parentIndex1 === parentIndex2) return false;

		if (this.ranks[parentIndex1] > this.ranks[parentIndex2]) {
			this.parents[parentIndex2] = parentIndex1;
			this.ranks[parentIndex2] += this.ranks[parentIndex1];
		} else {
			this.parents[parentIndex1] = parentIndex2;
			this.ranks[parentIndex1] += this.ranks[parentIndex2];
		}

		return true;
	}
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
    const unionFind = new UnionFind(edges);

    for (const [node, edge] of edges) {
        if (!unionFind.union(node, edge)) return [node, edge];
    }
};
