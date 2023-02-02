/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. recursion: O(n)                        =
========================================================= */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverse = (head, node) => {
    let cur = head;
    let prev = null;

    while (cur !== node) {
        [cur.next, prev, cur] = [prev, cur, cur.next];
    }

    return prev;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    if (head === null) {
        return null;
    }

    let a = head, b = head;

    for (let i = 0; i < k; ++i) {
        // base case: no need to reverse
        if (b === null) {
            return head;
        }

        b = b.next;
    }

    const newHead = reverse(a, b);

    a.next = reverseKGroup(b, k);

    return newHead;
};

/* =========================================================
=       Solution 2. iteration: O(n)                        =
========================================================= */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    let n = 0;

    for (let i = head; i !== null; i = i.next, ++n);

    const dummyHead = new ListNode(-1, head); // 0 <= Node.val <= 1000

    for (let prev = dummyHead, tail = head; n >= k; n -= k) {
        for (let i = 1; i < k; ++i) {
            [tail.next.next, prev.next, tail.next] = [prev.next, tail.next, tail.next.next];
        }

        prev = tail;
        tail = tail.next;
    }

    return dummyHead.next;
}
