/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. divide and conquer: O (sum(n))         =
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
const appendNode = (node1, node2) => {
    node1.next = node2;
}

/**
 * @param {ListNode[]} lists
 * @param {number} left
 * @param {number} right
 * @return {ListNode | null}
 */
const mergeK = (lists, left, right) => {
    if (left > right) {
        return null;
    }

    if (left === right) {
        return lists[left];
    }

    const mid = (left + right) >>> 1;

    return mergeTwo(mergeK(lists, left, mid), mergeK(lists, mid + 1, right));
};

/**
 * @param {ListNode} lists1
 * @param {ListNode} lists2
 * @return {ListNode}
 */
const mergeTwo = (list1, list2) => {
    const dummyHead = new ListNode(0);
    let cur = dummyHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            appendNode(cur, list1);
            list1 = movePointer(list1);
        } else {
            appendNode(cur, list2);
            list2 = movePointer(list2);
        }

        cur = movePointer(cur);
    }

    cur.next = list1 || list2;

    return dummyHead.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    return mergeK(lists, 0, lists.length - 1);
};
