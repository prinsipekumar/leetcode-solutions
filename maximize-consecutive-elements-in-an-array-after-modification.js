var maxSelectedElements = function(nums) {
    nums.sort((a, b) => a - b);

    const dp = new Map();
    let ans = 0;

    for (const x of nums) {
        const useX = (dp.get(x - 1) || 0) + 1;
        const useXPlusOne = (dp.get(x) || 0) + 1;

        dp.set(x, Math.max(dp.get(x) || 0, useX));
        dp.set(x + 1, Math.max(dp.get(x + 1) || 0, useXPlusOne));

        ans = Math.max(ans, dp.get(x), dp.get(x + 1));
    }

    return ans;
};

const nums = [2, 1, 5, 1, 1];
console.log(maxSelectedElements(nums));  //3
