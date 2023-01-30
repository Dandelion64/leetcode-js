/* =========================================================
=       Breadth-first Search (Pseudo Code)                 =
========================================================= */

const bfs = (start, target) => {
    const queue = [];
    const visited = new Set();
    let curNode;
    let step = 0;

    queue.push(start);
    visited.add(start);

    while (queue) {
        const n = queue.length;

        for (let i = 0; i < n; ++i) {
            curNode = queue.shift();

            if (curNode === target) {
                return step;
            }

            for (let x of curNode.adj()) {
                if (!visited.has(x)) {
                    queue.push(x);
                    visited.add(x);
                }
            }
        }

        ++step;
    }
}
