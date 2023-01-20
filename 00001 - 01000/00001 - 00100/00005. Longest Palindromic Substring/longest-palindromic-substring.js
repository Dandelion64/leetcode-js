/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {string} s
 * @return {string}
 */
const palindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        --left;
        ++right;
    }

    return s.slice(left + 1, right);
}

/**
 * @param {string} s
 * @param {string} seperator
 * @return {string}
 */
const longestPalindrome = (s) => {
    let s1;
    let s2;
    let result = '';

    for (let i = 0; i < s.length; ++i) {
        s1 = palindrome(s, i, i);
        s2 = palindrome(s, i, i + 1);
        result = (result.length > s1.length) ? result : s1;
        result = (result.length > s2.length) ? result : s2;
    }

    return result;
}

/* =========================================================
=       Solution 2. Manacher's algorithm: O(n)             =
========================================================= */

/**
 * @param {string} s
 * @param {string} seperator
 * @return {string}
 */
const interpolateString = (s, seperator) => {
    const n = s.length;

    if (n <= 1) {
        return s;
    }

    if (s.indexOf(seperator) !== -1) {
        throw new Error('Seperator exists in the string.');
    }

    let newStr = `${seperator}`;

    for (let i = 0; i < n; ++i) {
        newStr += `${s[i]}${seperator}`;
    }

    return newStr;
    // or, return seperator + s.split('').join(seperator) + seperator
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    const n = s.length;

    if (n <= 1) {
        return s;
    }

    const newS = interpolateString(s, '#');
    const interpolatedN = 2 * n + 1;
    let palindromicRadiusSet = new Array(interpolatedN).fill(0);
    let slow = 0;
    let center = 0;
    let left;
    let right;
    let mirror;
    let newRadius;
    let curRight;
    let maxRight = 0;
    let maxLength = 1;

    for (let fast = 0; fast < interpolatedN; ++fast) {
        if (fast < maxRight) {
            mirror = 2 * center - fast;
            palindromicRadiusSet[fast] = Math.min(maxRight - fast, palindromicRadiusSet[mirror]);
        }

        newRadius = palindromicRadiusSet[fast] + 1;
        left = fast - newRadius;
        right = fast + newRadius;

        while (left >= 0 && right < interpolatedN && newS[left] === newS[right]) {
            ++palindromicRadiusSet[fast];

            --left;
            ++right;
        }

        curRight = fast + palindromicRadiusSet[fast];

        if (curRight > maxRight) {
            maxRight = curRight;
            center = fast;
        }

        if (palindromicRadiusSet[fast] > maxLength) {
            maxLength = palindromicRadiusSet[fast];
            slow = (fast - maxLength) >> 1;
        }
    }

    return s.slice(slow, slow + maxLength);
};
