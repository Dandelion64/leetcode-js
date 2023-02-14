/* =========================================================
=       Solution 1. O(1)                                   =
========================================================= */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let result = '';
    let n = a.length - 1, m = b.length - 1, cur = 0;

    while (n >= 0 || m >= 0) {
        let sum = cur;

        if (n >= 0) {
            sum += a[n--] - '0';
        }

        if (m >= 0) {
            sum += b[m--] - '0';
        }

        result = sum % 2 + result;
        cur = sum >> 1;
    }

    if (cur > 0) {
        result = 1 + result;
    }

    return result;
};
