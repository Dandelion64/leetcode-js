/* =========================================================
=       Binary Tree                                        =
========================================================= */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    // recursion
    traverse(root.left);
    traverse(root.right);
}

/* =========================================================
=       N-ary Tree                                         =
========================================================= */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

function traverse(root) {
    // iteration & recursion
    for (let child of root.children) {
        traverse(child);
    }
}

/* =========================================================
=       Binary Tree: Pre-order, In-order & Post-order      =
========================================================= */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    // pre-order: root -> left -> right
    traverse(root.left);
    // in-order: left -> root -> right
    traverse(root.right);
    // post-order: left -> right -> root
}

/* =========================================================
=       Binary Tree: Level-order (Breadth-first Search)    =
========================================================= */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    if (root === null) {
        return;
    }

    let stack = [root];
    let curNode;

    while (stack.length) {
        curNode = stack.pop();

        if (curNode.right) {
            stack.push(curNode.right);
        }

        if (curNode.left) {
            stack.push(curNode.left);
        }
    }
}
