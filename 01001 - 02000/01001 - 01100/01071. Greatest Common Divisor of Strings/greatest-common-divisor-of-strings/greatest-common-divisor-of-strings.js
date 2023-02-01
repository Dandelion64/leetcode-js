/* =========================================================
=       Solution 1. O(n + m)                               =
========================================================= */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    /**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
    const gcd = (a, b) => {
        return (0 === b) ? a : gcd(b, a % b);
    }

    return str1.substring(0, gcd(str1.length, str2.length));
};
