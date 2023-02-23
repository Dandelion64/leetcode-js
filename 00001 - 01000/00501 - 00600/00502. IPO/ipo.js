/* =========================================================
=       Solution 1. greedy: O(n log n)                     =
========================================================= */

// heap (priority queue)

// Ref: https://github.com/HDU-Coder-X/Daily-question-of-Leetcode/blob/master/questions/2021-09-08-502.%20IPO.md

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const defaultCmp = (x, y) => x > y;

/**
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 */
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

class Heap {
    /**
     * @param {function} cmp
     */
	constructor(cmp = defaultCmp) {
		this.container = [];
		this.cmp = cmp;
	}

    /**
     * @param {number} data
     */
	insert(data) {
		const { container, cmp } = this;

		container.push(data);

		let index = this.size() - 1;

		while (index) {
			let parent = (index - 1) >> 1;

			if (!cmp(container[index], container[parent])) return;

			swap(container, index, parent);

			index = parent;
		}
	}

	pop() {
		if (!this.size()) return null;

		const { container, cmp } = this;

		swap(container, 0, this.size() - 1);

		const result = container.pop();
		const length = this.size();
		let index = 0, exchange = index * 2 + 1;

		while (exchange < length) {
			let right = index * 2 + 2;

			if (right < length && cmp(container[right], container[exchange])) {
				exchange = right;
			}

			if (!cmp(container[exchange], container[index])) break;

			swap(container, exchange, index);

			index = exchange;
			exchange = index * 2 + 1;
		}

		return result;
	}

	size() {
		return this.container.length;
	}
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
const findMaximizedCapital = (k, w, profits, capital) => {
	const n = profits.length;
	const arr = new Array(n);

	for (let i = 0; i < n; i++) {
		arr[i] = [capital[i], profits[i]];
	}

	arr.sort((a, b) => a[0] - b[0]);

	const maxHeap = new Heap();
	let cur = 0;

	for (let i = 0; i < k; i++) {
		while (cur < n && arr[cur][0] <= w) {
			maxHeap.insert(arr[cur++][1]);
		}

		if (maxHeap.size()) {
			w += maxHeap.pop();
		} else {
            break;
        }
	}

	return w;
};
