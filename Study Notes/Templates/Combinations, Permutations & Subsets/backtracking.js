/* =========================================================
=       Combinations and Subsets (Actually the Same)       =
========================================================= */

/**
 * No duplicates and repeat selections.
 */
const track = [];

function backtrack(nums, start) {
    for (let i = start; i < nums.length; ++i) {
        track.push(nums[i]);
        backtrack(nums, i + 1);
        track.pop();
    }
}

/**
 * Duplicates are allowed; no repeat selections.
 */
const track = [];

nums.sort((a, b) => a - b); // in-place

function backtrack(nums, start) {
    for (let i = start; i < nums.length; ++i) {
        if (i > start && nums[i] == nums[i - 1]) {
            continue;
        }

        track.push(nums[i]);
        backtrack(nums, i + 1);
        track.pop();
    }
}

/**
 * No duplicates; repeat selections are allowed.
 */
const track = [];

function backtrack(nums, start) {
    for (let i = start; i < nums.length; ++i) {
        track.push(nums[i]);
        backtrack(nums, i);
        track.pop();
    }
}

/* =========================================================
=       Permutations                                       =
========================================================= */

/**
 * No duplicates and repeat selections.
*/
const track = [];
const used = new Array(nums.length);

function backtrack(nums) {
    for (let i = start; i < nums.length; ++i) {
        if (used[i]) {
            continue;
        }

        track.push(nums[i]);
        used[i] = true;
        backtrack(nums);
        track.pop();
        used[i] = false;
    }
}

/**
 * Duplicates are allowed; no repeat selections.
 */
const track = [];
const used = new Array(nums.length);

nums.sort((a, b) => a - b); // in-place

function backtrack(nums) {
    for (let i = start; i < nums.length; ++i) {
        if (used[i]) {
            continue;
        }

        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }

        track.push(nums[i]);
        used[i] = true;
        backtrack(nums);
        track.pop();
        used[i] = false;
    }
}

/**
 * No duplicates; repeat selections are allowed.
 */
const track = [];

function backtrack(nums) {
    for (let i = start; i < nums.length; ++i) {
        track.push(nums[i]);
        backtrack(nums);
        track.pop();
    }
}
