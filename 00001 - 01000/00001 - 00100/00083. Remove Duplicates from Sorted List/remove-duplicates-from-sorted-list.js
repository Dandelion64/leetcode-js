/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. fast-slow pointers: O(n)               =
========================================================= */

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
const movePointer = (node) => {
    return node.next;
}

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
const linkNode = (node1, node2) => {
    node1.next = node2;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    if (head === null) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast) {
        if (fast.val !== slow.val) {
            linkNode(slow, fast);
            slow = movePointer(slow);
        }

        fast = movePointer(fast);
    }

    linkNode(slow, null);

    return head;
};
