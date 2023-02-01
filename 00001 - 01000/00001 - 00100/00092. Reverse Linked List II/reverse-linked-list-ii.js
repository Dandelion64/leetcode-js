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

// slow

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    const reverseN = (head, n) => {
        let successor = null;

        /**
         * @param {ListNode} head
         * @param {number} n
         * @return {ListNode}
         */
        const reverseListFirstN = (head, n) => {
            if (n === 1) {
                successor = head.next;
                return head;
            }

            const last = reverseListFirstN(head.next, n - 1);
            head.next.next = head;
            head.next = successor;

            return last;
        }

        return reverseListFirstN(head, n);
    }

    if (left === 1) {
        return reverseN(head, right);
    }

    head.next = reverseBetween(head.next, left - 1, right - 1);

    return head;
};

/* =========================================================
=       Solution 2. iteration: O(n)                        =
========================================================= */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    const dummyHead = new ListNode(-Infinity, head);
    let cur = dummyHead.next, prev = cur, next = null, index = 0;
    let node1 = null, node2 = null, node3 = null, node4 = null;

    while (cur) {
        next = cur.next;

        ++index;

        if (index > left && index <= right) {
            cur.next = prev;
        }

        if (index === left - 1) {
            node1 = cur;
        }

        if (index === left) {
            node2 = cur;
        }

        if (index === right) {
            node3 = cur;
        }

        if (index === right + 1) {
            node4 = cur;
        }

        prev = cur;
        cur = next;
    }

    (node1 || dummyHead).next = node3;
    node2.next = node4;

    return dummyHead.next;
}
