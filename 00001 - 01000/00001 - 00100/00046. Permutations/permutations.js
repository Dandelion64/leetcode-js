/* =========================================================
=       Solution 1.v1. backtracking: O(n!)                 =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const result = [];
    const track = [];
    const used = new Array(nums.length);

    /**
     * @param {number[]} nums
     * @param {number[]} track
     * @param {boolean[]} used
     * @return {number[][]}
     */
    const backtrack = (nums, track, used) => {
        const n = nums.length;

        if (track.length === n) {
            result.push([...track]);
            return;
        }

        for (let i = 0; i < n; ++i) {
            if (used[i]) {
                continue;
            }

            track.push(nums[i]);
            used[i] = true;
            backtrack(nums, track, used);
            track.pop();
            used[i] = false;
        }
    }

    backtrack(nums, track, used);

    return result;
};

/* =========================================================
=       Solution 1.v2. backtracking: O(n!)                 =
========================================================= */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const result = [];
    const track = [];

    /**
     * @param {number[]} nums
     * @param {number[]} track
     * @return {number[][]}
     */
    const backtrack = (nums) => {
        const n = nums.length;

        if (track.length === n) {
            // slice() return a new array
            result.push(track.slice());
            return;
        }

        for (let i = 0; i < n; ++i){
            if (track.includes(nums[i])) {
                continue;
            }

            track.push(nums[i]);
            backtrack(nums);
            track.pop();
        }
    }

    backtrack(nums);

    return result;
};
