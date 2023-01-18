/* =========================================================
=       Array                                              =
========================================================= */

function traverse(arr) {
    for (let i = 0; i < arr.length; ++i) {
        // iteration
    }
}

/* =========================================================
=       Linked List                                        =
========================================================= */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function traverse(head) {
    for (let p = head; p !== null; p = p.next) {
        // iteration
    }
}

function traverse(head) {
    // recursion
    traverse(head.next);
}

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
=       Binary Tree: Preorder, Inorder & Postorder         =
========================================================= */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    // preorder: root -> left -> right
    traverse(root.left);
    // inorder: left -> root -> right
    traverse(root.right);
    // postorder: left -> right -> root
}
