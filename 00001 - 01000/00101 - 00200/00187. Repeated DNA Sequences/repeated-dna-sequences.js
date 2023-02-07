/* =========================================================
=       Solution 1. sliding window: O(n)                   =
========================================================= */

// Rabin-Karp
// translate a 'A', 'C', 'G', 'T' string to a number in quaternary number
// 'A': 0, 'C': 1, 'G': 2, 'T': 3

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
	const nums = Array(s.length);

	for (let i = 0; i < nums.length; ++i) {
		if (s[i] === 'A') {
			nums[i] = 0;
			continue;
		}

		if (s[i] === 'C') {
			nums[i] = 1;
			continue;
		}

		if (s[i] === 'G') {
			nums[i] = 2;
			continue;
		}

		if (s[i] === 'T') {
			nums[i] = 3;
		}
	}

	const dict = new Set();
	const sequences = new Set();

	const length = 10;
	const radix = 4;
	const numericalValueForRemoval = 4 ** (length - 1);

	let left = 0, right = 0, cur = 0;

    while (right < nums.length) {
        cur = cur * radix + nums[right];

        ++right;

        if (right - left === length) {
            if (dict.has(cur)) {
                sequences.add(s.substring(left, right));
            } else {
                dict.add(cur);
            }

            cur = cur - nums[left] * numericalValueForRemoval;

            ++left;
        }
    }

    const result = [];

    for (let sequence of sequences) {
        result.push(sequence)
    }

    return result;
};
