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
