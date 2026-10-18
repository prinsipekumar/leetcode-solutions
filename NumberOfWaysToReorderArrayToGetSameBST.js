const MOD = 1000000007n;

function numOfWays(nums) {
  const n = nums.length;

  const comb = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0n));

  for (let i = 0; i <= n; i++) {
    comb[i][0] = 1n;
    comb[i][i] = 1n;

    for (let j = 1; j < i; j++) {
      comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  function dfs(arr) {
    if (arr.length <= 2) return 1n;

    const root = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < root) left.push(arr[i]);
      else right.push(arr[i]);
    }

    const leftWays = dfs(left);
    const rightWays = dfs(right);

    const interleaveWays = comb[left.length + right.length][left.length];

    return (((interleaveWays * leftWays) % MOD) * rightWays) % MOD;
  }

  return Number((dfs(nums) - 1n + MOD) % MOD);
}

console.log(numOfWays([2, 1, 3])); //1
console.log(numOfWays([3, 4, 5, 1, 2])); //5
console.log(numOfWays([1, 2, 3])); //0
