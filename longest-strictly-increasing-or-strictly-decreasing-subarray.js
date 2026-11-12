var longestMonotonicSubarray = function(nums) {
    let inc = 1, dec = 1, ans = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++;
            dec = 1;
        } else if (nums[i] < nums[i - 1]) {
            dec++;
            inc = 1;
        } else {
            inc = dec = 1;
        }

        ans = Math.max(ans, inc, dec);
    }

    return ans;
};

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); // 2
