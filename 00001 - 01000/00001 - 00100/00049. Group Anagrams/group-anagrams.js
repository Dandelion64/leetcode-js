/* =========================================================
=       Solution 1. Hash Table: O(n)                       =
========================================================= */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const map = {};
	const result = [];

	for (let i = 0; i < strs.length; ++i) {
		const strSorted = strs[i].split('').sort().join('');

		if (map[strSorted] !== undefined) {
			result[map[strSorted]].push(strs[i]);
		} else {
			result.push([strs[i]]);
			map[strSorted] = result.length - 1;
		}
	}

    return result;
};
