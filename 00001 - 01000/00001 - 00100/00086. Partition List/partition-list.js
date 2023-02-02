/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
const movePointer = (node) => {
	return node.next;
};

/**
 * @param {ListNode} node
 * @return {ListNode}
 */
const appendNode = (node1, node2) => {
	node1.next = node2;
};

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
	if (head === null || head.next === null) {
		return head;
	}

	const dummyHeadLow = new ListNode(0);
	const dummyHeadHigh = new ListNode(0);
	let cur = head, curLow = dummyHeadLow, curHigh = dummyHeadHigh;

	while (cur) {
		if (cur.val < x) {
			appendNode(curLow, cur);
			curLow = movePointer(curLow);
		} else {
			appendNode(curHigh, cur);
			curHigh = movePointer(curHigh);
		}

		const temp = cur.next;
		cur.next = null;
		cur = temp;
	}

	appendNode(curLow, dummyHeadHigh.next);

	return dummyHeadLow.next;
};
