/* =========================================================
=       Solution 1. built-in: O(n)                         =
========================================================= */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
	return haystack.indexOf(needle);
};

/* =========================================================
=       Solution 2. two pointers: O(n)                     =
========================================================= */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    if (!needle) return 0;

    if (!haystack || needle.length > haystack.length) return -1;

    const length = haystack.length - needle.length;

    for (let i = 0; i <= length; ++i) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; ; ++j) {
                if (j === needle.length) {
                    return i;
                }
                else if (haystack[i + j] !== needle[j]) {
                    break;
                }
            }
        }
    }

    return -1;
};
