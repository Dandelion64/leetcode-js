/* =========================================================
=       Structure of Tree (Pseudo Code)                    =
========================================================= */

class TreeNode {
    constructor (val) {
        this.val = val;
        this.children = [new TreeNode(/* children... */)];
    }
}

/* =========================================================
=       Structure of Graph                                 =
========================================================= */

class Vertex {
    constructor (val) {
        this.val = val;
        this.neighbors = [new Vertex(/* neighbors... */)];
    }
}

/* =========================================================
=       Adjacency list                                     =
========================================================= */

// Implement by linked-list.
// lesser space needed.

/* =========================================================
=       Adjacency Matrix                                   =
========================================================= */

// Implement by matrix.
// quickly finding if 2 nodes were adjacent.

/* =========================================================
=       Traverse a Tree                                    =
========================================================= */

function traverse(root) {
    if (root === null) return;

    // pre-oreder ...

    for (let child of children) {
        traverse(child);
    }

    // post-order ...
}

/* =========================================================
=       Traverse a Graph (Backtracking)                    =
========================================================= */

let visited = [];
let onPath = [];

function traverse(graph, s) {
    if (visited[s]) return;

    visited[s] = true;
    onPath[s] = true;

    for (let neighbor of neighbors) {
        traverse(graph, neighbor);
    }

    onPath[s] = false;
}
