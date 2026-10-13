var maxAlternatingSum = function (nums) {
  let squares = nums.map((x) => x * x);
  squares.sort((a, b) => a - b);

  let n = squares.length;
  let m = Math.floor(n / 2);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (i < m) ans -= squares[i];
    else ans += squares[i];
  }
  return ans;
};

console.log(maxAlternatingSum([1, 2, 3])); //12
console.log(maxAlternatingSum([1, -1, 2, -2, 3, -3])); //16
