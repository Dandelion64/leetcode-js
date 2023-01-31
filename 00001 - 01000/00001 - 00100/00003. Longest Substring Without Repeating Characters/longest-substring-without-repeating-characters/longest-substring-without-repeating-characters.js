/* =========================================================
=       Solution 1.v1. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const window = {};
    let start = 0;
    let end = 0;
    let result = 0;

    while (end < s.length) {
        window[s[end]] = (window[s[end]]) ? ++window[s[end]] : 1;

        while (window[s[end]] > 1) {
            --window[s[start]];

            ++start;
        }

        ++end;

        result = Math.max(result, end - start);

    }

    return result;
}

/* =========================================================
=       Solution 1.v2. sliding window: O(n)                =
========================================================= */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const charactersSet = new Set();

    let start = 0;
    let end = 0;
    let length = 0;

    while (end < s.length) {
        while (charactersSet.has(s[end])) {
            charactersSet.delete(s[start]);
            ++start;
        }

        charactersSet.add(s[end]);
        length = Math.max(length, end - start + 1);

        ++end;
    }

    return length;
}

/* =========================================================
=       Solution 2. array: O(n)                            =
========================================================= */

// fast

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let currentSubstring = [];
    let length = 0;

    for (let i = 0; i < s.length; ++i) {
        const currentCharacterIndex = currentSubstring.indexOf(s[i]);

        if (currentCharacterIndex !== -1) {
            currentSubstring.splice(0, currentCharacterIndex + 1);
        }

        currentSubstring.push(s[i]);
        length = Math.max(length, currentSubstring.length)
    }

    return length;
};
