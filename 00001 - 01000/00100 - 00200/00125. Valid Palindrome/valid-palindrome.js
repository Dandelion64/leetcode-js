/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    s = s.toLowerCase();

    while (left < right) {
        if (s[left].match(/[^a-z0-9]/)) {
            ++left;
            continue;
        }

        if (s[right].match(/[^a-z0-9]/)) {
            --right;
            continue;
        }

        if (s[left] !== s[right]) {
            return false;
        }

        ++left;
        --right;
    }

    return true;
};
