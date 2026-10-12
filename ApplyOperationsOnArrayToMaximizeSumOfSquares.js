var maxSum = function (nums, k) {
  const MOD = 1e9 + 7;
  const MAX_BITS = 32;

  let bitCount = new Array(MAX_BITS).fill(0);
  for (let num of nums) {
    for (let b = 0; b < MAX_BITS; b++) {
      if ((num >> b) & 1) {
        bitCount[b]++;
      }
    }
  }

  let constructed = [];
  for (let i = 0; i < nums.length; i++) {
    let val = 0;
    for (let b = 0; b < MAX_BITS; b++) {
      if (bitCount[b] > 0) {
        val |= 1 << b;
        bitCount[b]--;
      }
    }
    constructed.push(val);
  }

  constructed.sort((a, b) => b - a);

  let result = 0n;
  for (let i = 0; i < k; i++) {
    result += BigInt(constructed[i]) * BigInt(constructed[i]);
  }

  return Number(result % BigInt(MOD));
};

console.log(maxSum([2, 6, 5, 8], 2)); //261
console.log(maxSum([4, 5, 4, 7], 3)); //90
