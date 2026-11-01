var minMoves = function(nums) {
    const minVal = Math.min(...nums);
    let moves = 0;

    for (const num of nums) {
        moves += num - minVal;
    }

    return moves;
};

const nums = [1, 2, 3];
console.log(minMoves(nums)); //3
