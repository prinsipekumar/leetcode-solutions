function minOperations(nums) {
    const n = nums.length;

    let zeroIdx = 0;
    while (nums[zeroIdx] !== 0) zeroIdx++;

    const checkIncreasing = () => {
        for (let i = 0; i < n; i++) {
            if (nums[(zeroIdx + i) % n] !== i) {
                return false;
            }
        }
        return true;
    };

    if (checkIncreasing()) {
        return Math.min(
            zeroIdx,
            2 + (n - zeroIdx)
        );
    }

    const revZeroIdx = n - 1 - zeroIdx;

    nums.reverse();

    let isDecreasing = true;
    for (let i = 0; i < n; i++) {
        if (nums[(revZeroIdx + i) % n] !== i) {
            isDecreasing = false;
            break;
        }
    }

    if (!isDecreasing) {
        return -1;
    }

    return Math.min(
        1 + revZeroIdx,
        1 + (n - revZeroIdx)
    );
}

console.log(minOperations([0, 2, 1]));     //2
console.log(minOperations([1, 0, 2]));     //2
console.log(minOperations([2, 0, 1, 3]));  //-1
