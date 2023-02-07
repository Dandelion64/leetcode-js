/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
    const window = new Set();
    const n = fruits.length;
    let start = 0, sum = 0;
    let result = -Infinity;

    for (let i = 0; i < n; ++i) {
        const fruit = fruits[i];

        if (window.size < 2) {
            window.add(fruit);
            ++sum;
            start = i;
            continue;
        }

        if (window.has(fruit)) {
            ++sum;

            if (fruit !== fruits[i - 1]) {
                start = i;
            }
        } else {
            result = Math.max(result, sum);
            sum = i - start + 1;
            window.clear();
            window.add(fruit);
            window.add(fruits[i - 1]);
            start = i;
        }
    }

    result = Math.max(result, sum);

    return result;
};

/* =========================================================
=       Solution 2. sliding window: O(n)                   =
========================================================= */

/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
    const window = new Map();
    let start = 0, end = 0;
    let result = 0;

    while (end < fruits.length) {
        const count = window.has(fruits[end]) ? window.get(fruits[end]) + 1 : 1
        window.set(fruits[end], count);

        while (window.size > 2) {
            window.set(fruits[start], window.get(fruits[start]) - 1);

            if (window.get(fruits[start]) === 0) {
                window.delete(fruits[start]);
            }

            ++start;
        }

        result = Math.max(result, end - start + 1);

        ++end;
    }

    return result;
};
