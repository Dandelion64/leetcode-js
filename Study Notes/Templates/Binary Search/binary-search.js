/* =========================================================
=       Two Pointers: [,)                                  =
========================================================= */

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;

    while (left < right) {
        mid = (left + right) >>> 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
}

/* =========================================================
=       Two Pointers: [,]                                  =
========================================================= */

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = (left + right) >>> 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

/* =========================================================
=       Left Bound: [,)                                    =
========================================================= */

function leftBoundBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;

    while (left < right) {
        mid = (left + right) >>> 1;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (left === nums.length) {
        return -1;
    }

    return (nums[left] === target) ? left : -1;
}

/* =========================================================
=       Left Bound: [,]                                    =
========================================================= */

function leftBoundBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = (left + right) >>> 1;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left === nums.length) {
        return -1;
    }

    return (nums[left] === target) ? left : -1;
}

/* =========================================================
=       Right Bound: [,)                                   =
========================================================= */

function rightBoundBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;

    while (left < right) {
        mid = (left + right) >>> 1;

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (left - 1 < 0) {
        return -1;
    }

    return (nums[left - 1] === target) ? (left - 1) : -1;
}

/* =========================================================
=       Right Bound: [,]                                   =
========================================================= */

function rightBoundBinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = (left + right) >>> 1;

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left - 1 < 0) {
        return -1;
    }

    return (nums[left - 1] === target) ? (left - 1) : -1;
}
