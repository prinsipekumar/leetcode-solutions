var sumOfSquares = function (nums) {
  const n = nums.length;
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      ans += nums[i - 1] * nums[i - 1];
    }
  }

  return ans;
};

console.log(sumOfSquares([1, 2, 3, 4])); //21 (1^2 + 2^2 + 4^2)

console.log(sumOfSquares([2, 7, 1, 19, 18, 3])); //63 (2^2 + 7^2 + 1^2 + 3^2)
