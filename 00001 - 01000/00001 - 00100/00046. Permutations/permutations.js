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
            return result.push([...track]);
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
    const backtrack = (nums, track) => {
        const n = nums.length;

        if (track.length === n) {
            // slice() return a new array
            return result.push(track.slice());
        }

        for (let i = 0; i < n; ++i){
            if (track.includes(nums[i])) {
                continue;
            }

            track.push(nums[i]);
            backtrack(nums, track);
            track.pop();
        }
    }

    backtrack(nums, track);

    return result;
};
