var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let moves = 0;

    while (left < right) {
        moves += nums[right] - nums[left];
        left++;
        right--;
    }

    return moves;
};

console.log(minMoves2([1, 10, 2, 9])); //16
