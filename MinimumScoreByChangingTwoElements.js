var minimizeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;

    return Math.min(
        nums[n - 3] - nums[0],
        nums[n - 2] - nums[1],
        nums[n - 1] - nums[2]
    );
};

const nums = [1, 4, 7, 8, 5];
console.log(minimizeSum(nums));  //3
