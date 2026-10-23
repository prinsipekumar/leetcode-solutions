var sortPermutation = function (nums) {
  let ans = -1;
  let isSorted = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      let prevAns = ans;
      ans &= nums[i];
      isSorted = false;
    }
  }

  const result = isSorted ? 0 : ans;
  return result;
};

console.log(sortPermutation([0, 2, 1, 3])); // 0
