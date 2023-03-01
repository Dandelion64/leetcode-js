/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/* =========================================================
=       Solution 1. heap: O(n log k)                       =
========================================================= */

/**
 * leetcode implement some classes for js leetcoder
 * ex: MaxPriorityQueue, MinPriorityQueue.
 */

class KthLargest {
	/**
	 * @param {number} k
	 * @param {number[]} nums
	 */
	constructor(k, nums) {
		this.pq = new MaxPriorityQueue({ priority: (x) => -x });
		this.size = k;

		for (const num of nums) {
			this.pq.enqueue(num);

			if (this.pq.size() > this.size) {
				this.pq.dequeue();
			}
		}
	}

	/**
	 * @param {number} val
	 * @return {number}
	 */
	add(val) {
		this.pq.enqueue(val);

		if (this.pq.size() > this.size) {
			this.pq.dequeue();
		}

		return this.pq.front().element;
	}
}

/* =========================================================
=       Solution 2. heap: O(n log k)                       =
========================================================= */

// Ref: https://github.com/doocs/leetcode/blob/main//solution/0700-0799/0703.Kth%20Largest%20Element%20in%20a%20Stream/README_EN.md

class KthLargest {
	/**
	 * @param {number} k
	 * @param {number[]} nums
	 */
	constructor(k, nums) {
		this.heap = new MinHeap();
		this.size = k;

		for (const num of nums) {
			this.add(num);
		}
	}

	/**
	 * @param {number} val
	 * @return {number}
	 */
	add(val) {
		this.heap.offer(val);

		if (this.heap.size() > this.size) {
			this.heap.poll();
		}

		return this.heap.peek();
	}
}

class MinHeap {
	/**
	 * @param {number[]} data
	 */
	constructor(data = []) {
		this.data = data;
		this.comparator = (a, b) => a - b;
		this.heapify();
	}

	heapify() {
		if (this.size() < 2) return;

		for (let i = 1; i < this.size(); i++) {
			this.bubbleUp(i);
		}
	}

	peek() {
		if (this.size() === 0) return null;

		return this.data[0];
	}

	offer(val) {
		this.data.push(val);
		this.bubbleUp(this.size() - 1);
	}

	poll() {
		if (this.size() === 0) return null;

		const result = this.data[0];
		const last = this.data.pop();

		if (this.size() !== 0) {
			this.data[0] = last;
			this.bubbleDown(0);
		}

		return result;
	}

	/**
	 * @param {number} index
	 */
	bubbleUp(index) {
		while (index > 0) {
			const parentIndex = (index - 1) >> 1;
			if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	/**
	 * @param {number} index
	 */
	bubbleDown(index) {
		const lastIndex = this.size() - 1;

		while (true) {
			const leftIndex = index * 2 + 1;
			const rightIndex = index * 2 + 2;
			let findIndex = index;

			if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
				findIndex = leftIndex;
			}

			if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
				findIndex = rightIndex;
			}

			if (index !== findIndex) {
				this.swap(index, findIndex);
				index = findIndex;
			} else {
				break;
			}
		}
	}

	/**
	 * @param {number} index1
	 * @param {number} index2
	 */
	swap(index1, index2) {
		[this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
	}

	size() {
		return this.data.length;
	}
}
