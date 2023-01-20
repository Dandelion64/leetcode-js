/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. O(n1 + n2)                             =
========================================================= */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let result = new ListNode(0); // dummy head
    let cur = result;

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }

        cur = cur.next;
    }

    if (list1 !== null) {
        cur.next = list1;
    }

    if (list2 !== null) {
        cur.next = list2;
    }

    return result.next;
};
