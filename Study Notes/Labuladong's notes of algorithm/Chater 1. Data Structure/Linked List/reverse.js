/* =========================================================
=       Template: Reverse (Recursion)                      =
========================================================= */

function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return last;
}

/* =========================================================
=       Template: Reverse the First N Nodes (Recursion)    =
========================================================= */

function reverseN(head, n) {
    let successor = null;

    reverseListFirstN(head, n);
}

function reverseListFirstN(head, n) {
    if (n === 1) {
        successor = head.next;
        return head;
    }

    const last = reverseListFirstN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;

    return last;
}

/* =========================================================
=       Template: Reverse [M, N] Nodes (Recursion)         =
========================================================= */

// m starts from 1

function reverseBetween(head, m, n) {
    if (m === 1) {
        return reverseN(head, n);
    }

    head.next = reverseBetween(head.next, m - 1, n - 1);

    return head;
}
