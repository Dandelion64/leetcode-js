/* =========================================================
=       Solution 1. BFS: O(n)                              =
========================================================= */

/**
 * @param {string} string
 * @param {number} index
 * @return {string}
 */
const wheelUp = (string, index) => {
    const chars = string.split('');

    chars[index] = ++chars[index] % 10;

    return chars.join('');
}

/**
 * @param {string} string
 * @param {number} index
 * @return {string}
 */
const wheelDown = (string, index) => {
    const chars = string.split('');

    chars[index] = (--chars[index] + 10) % 10;

    return chars.join('');
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
    if (target === '0000') {
        return 0;
    }

    const deadendsSet = new Set(deadends);

    if (deadendsSet.has('0000')) {
        return -1;
    }

    const queue = ['0000'];
    const visited = new Set('0000');
    let cur;
    let step = 0;

    while (queue.length) {
        const n = queue.length;

        for (let i = 0; i < n; ++i) {
            cur = queue.shift();

            if (deadendsSet.has(cur)) {
                continue;
            }

            if (cur === target) {
                return step;
            }

            for (let j = 0; j < 4; ++j) {
                const up = wheelUp(cur, j);

                if (!visited.has(up)) {
                    queue.push(up);
                    visited.add(up)
                }

                const down = wheelDown(cur, j);

                if (!visited.has(down)) {
                    queue.push(down);
                    visited.add(down)
                }
            }
        }

        ++step;
    }

    return -1;
};
