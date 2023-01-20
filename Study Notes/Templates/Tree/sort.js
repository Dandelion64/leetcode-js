/* =========================================================
=       Quicksort (Pseudo Code)                            =
========================================================= */

function sort(nums, lo, hi) {
    const p = partition(nums, lo, hi); // pre-order

    sort(nums, lo, p - 1);
    sort(nums, p + 1, hi);
}

/* =========================================================
=       Mergesort (Pseudo Code)                            =
========================================================= */

function sort(nums, lo, hi) {
    const mid = (lo + hi) >>> 1;

    sort(nums, lo, mid);
    sort(nums, mid + 1, hi);

    merge(nums, lo, mid, hi); // post-order
}
