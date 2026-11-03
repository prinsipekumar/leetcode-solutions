var minMoves = function(nums) {
    let maxVal = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
        sum += nums[i];
    }
    
    return (maxVal * nums.length) - sum;
};

const nums =;
const result = minMoves(nums);

console.log(result); // 3
