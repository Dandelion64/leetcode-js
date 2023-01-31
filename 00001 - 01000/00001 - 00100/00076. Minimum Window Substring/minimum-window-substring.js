/* =========================================================
=       Solution 1.v1. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    const dictionary = {};
    const m = s.length;
    const n = t.length;

    for (let i = 0; i < n; ++i) {
        dictionary[t[i]] = (dictionary[t[i]]) ? ++dictionary[t[i]] : 1;
    }

    const o = Object.keys(dictionary).length;

    let start = 0;
    let end = 0;
    let startIndex = 0;
    let minLength = Infinity;
    let validCount = 0;
    const window = {};

    while (end < m) {
        if (dictionary[s[end]]) {
            window[s[end]] = (window[s[end]]) ? ++window[s[end]] : 1;

            if (window[s[end]] === dictionary[s[end]]) {
                ++validCount;
            }
        }

        ++end;

        while (validCount === o) {
            const length = end - start;

            if (length < minLength) {
                startIndex = start;
                minLength = length;
            }

            if (dictionary[s[start]]) {
                if (window[s[start]] === dictionary[s[start]]) {
                    --validCount;
                }

                --window[s[start]];
            }

            ++start;
        }
    }

    return (minLength === Infinity) ? '' : s.substring(startIndex, startIndex + minLength);
};

/* =========================================================
=       Solution 1.v2. sliding window: O(n + m)            =
========================================================= */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    const dictionary = {};
    const m = s.length;
    const n = t.length;

    for (let i = 0; i < n; ++i) {
        dictionary[t[i]] = (dictionary[t[i]]) ? ++dictionary[t[i]] : 1;
    }

    let start = 0;
    let end = 0;
    let startIndex = m + 1;
    let minLength = m + 1;
    let matchCount = 0;

    while (end < m) {
        if (--dictionary[s[end]] >= 0) {
            ++matchCount;
        }

        while (matchCount === n) {
            const length = end - start + 1;

            if (length < minLength) {
                minLength = length;
                startIndex = start;
            }

            if (++dictionary[s[start]] > 0) {
                --matchCount;
            }

            ++start;
        }

        ++end;
    }

    return s.slice(startIndex, startIndex + minLength);
};
