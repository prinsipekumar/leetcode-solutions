var sumCounts = function (nums) {
  let n = nums.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    let freq = new Map();
    let distinct = 0;
    for (let j = i; j < n; j++) {
      if (!freq.has(nums[j])) {
        freq.set(nums[j], 1);
        distinct++;
      } else {
        freq.set(nums[j], freq.get(nums[j]) + 1);
      }
      total += distinct * distinct;
    }
  }
  return total;
};

console.log(sumCounts([1, 2, 1])); //15
