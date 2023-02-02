/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
	const n = words.length;

	if (n === 1) {
		return true; // order.length === 26
	}

	/**
	 * @param {string} word1
	 * @param {string} word2
	 * @return {boolean}
	 */
	const compareWords = (word1, word2) => {
		let index = 0;

		while (word1[index] || word2[index]) {
			if (!word1[index]) {
				return true;
			}

			if (!word2[index]) {
				return false;
			}

			if (order.indexOf(word1[index]) === order.indexOf(word2[index])) {
				++index;
				continue;
			}

			return order.indexOf(word1[index]) < order.indexOf(word2[index]);
		}

		return true; // word1 === word2
	};

	for (let i = 1; i < words.length; ++i) {
		if (!compareWords(words[i - 1], words[i])) {
			return false;
		}
	}

	return true;
};
