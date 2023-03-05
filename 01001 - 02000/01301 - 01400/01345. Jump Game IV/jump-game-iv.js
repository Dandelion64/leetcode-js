/* =========================================================
=       Solution 1. BFS: O(n)                              =
========================================================= */

/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function (arr) {
	const n = arr.length;

	if (n < 2) return 0;

	const indexesMap = new Map();

	for (let i = 0; i < n; ++i) {
		if (indexesMap.get(arr[i]) === undefined) {
			indexesMap.set(arr[i], [i]);
		} else {
			indexesMap.get(arr[i]).push(i);
		}
	}

	// BFS
	const queue = [0];
	let step = 0, visited = { 0: true };

	while (queue.length > 0) {
		const layer = queue.length;

		for (let i = 0; i < layer; ++i) {
			const index = queue.shift();

			if (index === n - 1) return step;

			const sameIndexes = indexesMap.get(arr[index]) ? new Set(indexesMap.get(arr[index])) : new Set();
			sameIndexes.add(index + 1);
			sameIndexes.add(index - 1);

			for (let sameIndex of sameIndexes) {
				if (sameIndex !== index && !visited[sameIndex]) {
					visited[sameIndex] = true;
					queue.push(sameIndex);
				}
			}

			indexesMap.delete(arr[index]);
		}

		++step;
	}

	return -1;
};
