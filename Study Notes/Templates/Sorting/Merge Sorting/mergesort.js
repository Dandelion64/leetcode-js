let temp;

function sorting(nums) {
    temp = Array(nums.length).fill(0);
    sort(nums, 0, nums.length - 1);
};

function sort(nums, low, high) {
    if (low === high) return;

    const mid = (low + high) >>> 1;

    sort(nums, low, mid);
    sort(nums, mid + 1, high);
    merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
    for (let i = low; i <= high; ++i) {
        temp[i] = nums[i];
    }

    let i = low, j = mid + 1;

    // p for pivot
    for (let p = low; p <= high; ++p) {
        if (i === mid + 1) {
            // half on the left has been sorted
            nums[p] = temp[j++];
        } else if (j === high + 1) {
            // half on the right has been sorted
            nums[p] = temp[i++];
        } else if (temp[i] > temp[j]) {
            nums[p] = temp[j++];
        } else {
            nums[p] = temp[i++];
        }
    }
}
