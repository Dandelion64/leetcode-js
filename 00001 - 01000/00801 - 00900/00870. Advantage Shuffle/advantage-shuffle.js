/* =========================================================
=       Solution 1. O(n)                                   =
========================================================= */

// sorting

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const advantageCount = (nums1, nums2) => {
    const n = nums1.length;

	nums1.sort((a, b) => a - b); // in-place

	const sortedIndex = nums2
		.map((val, index) => index)
		.sort((a, b) => {
			if (nums2[a] > nums2[b]) {
                return 1;
            } else {
                return -1;
            }
		});

	const result = [];

	let left = 0, right = n - 1;

	for (let i = 0; i < n; ++i) {
		if (nums1[i] > nums2[sortedIndex[left]]) {
			result[sortedIndex[left++]] = nums1[i];
		} else {
			result[sortedIndex[right--]] = nums1[i];
		}
	}

	return result;
};
