/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* =========================================================
=       Solution 1. two pointers: O(n)                     =
========================================================= */

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
const movePointer = (node) => {
	return node.next;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
	let pointerAB = headA;
	let pointerBA = headB;

	while (pointerAB !== pointerBA) {
		if (pointerAB === null) {
			pointerAB = headB;
		} else {
			pointerAB = movePointer(pointerAB);
		}

		if (pointerBA === null) {
			pointerBA = headA;
		} else {
			pointerBA = movePointer(pointerBA);
		}
	}

	return pointerAB;
};
