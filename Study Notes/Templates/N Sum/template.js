/* =========================================================
=       Two Sum (Multiple Solutions): O(n log n)           =
========================================================= */

function twoSumTarget(nums, target) {
    nums.sort((a, b) => a - b); // in-place

    const result = [];
    let left = 0, right = nums.length - 1, sum, numLeft, numRight;

    while (left < right) {
        sum = nums[left] + nums[right];
        numLeft = nums[left];
        numRight = nums[right];

        if (sum < target) {
            while (left < right && nums[left] === numLeft) {
                ++left;
            }
        } else if (sum > target) {
            while (left < right && nums[right] === numRight) {
                --right;
            }
        } else {
            result.push([numLeft, numRight]);

            while (left < right && nums[left] === numLeft) {
                ++left;
            }

            while (left < right && nums[right] === numRight) {
                --right;
            }
        }
    }

    return result;
}

/* =========================================================
=       N Sum: O(n log n + n^(n - 1))                      =
========================================================= */

function nSum(nums, n, start, target) {
    nums.sort((a, b) => a - b); // in-place

    return nSumTarget(nums, n, start, target);
}

function nSumTarget(nums, n, start, target) {
    const size = nums.length;
    const result = [];

    if (n < 2 || size < n) {
        return result;
    }

    let left, right, subArrays;

    if (n === 2) {
        left = start;
        right = size - 1;

        while (left < right) {
            sum = nums[left] + nums[right];
            numLeft = nums[left];
            numRight = nums[right];

            if (sum < target) {
                while (left < right && nums[left] === numLeft) {
                    ++left;
                }
            } else if (sum > target) {
                while (left < right && nums[right] === numRight) {
                    --right;
                }
            } else {
                result.push([numLeft, numRight]);

                while (left < right && nums[left] === numLeft) {
                    ++left;
                }

                while (left < right && nums[right] === numRight) {
                    --right;
                }
            }
        }
    } else {
        for (let i = start; i < size; ++i) {
            subArrays = nSumTarget(nums, n - 1, i + 1, target - nums[i]);

            for (let array of subArrays) {
                array.push(nums[i]);
                result.push(array);
            }

            while (i < size - 1 && nums[i] === nums[i + 1]) {
                ++i;
            }
        }
    }

    return result;
}
