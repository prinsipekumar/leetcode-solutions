function minSwaps(nums) {
  const digitSum = (num) => {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  const n = nums.length;

  const sorted = [...nums].sort((a, b) => {
    const sumA = digitSum(a);
    const sumB = digitSum(b);

    if (sumA !== sumB) {
      return sumA - sumB;
    }

    return a - b;
  });

  const targetIndex = new Map();

  for (let i = 0; i < n; i++) {
    targetIndex.set(sorted[i], i);
  }

  let swaps = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i] || targetIndex.get(nums[i]) === i) {
      continue;
    }

    let cycleLength = 0;
    let current = i;

    while (!visited[current]) {
      visited[current] = true;
      current = targetIndex.get(nums[current]);
      cycleLength++;
    }

    swaps += cycleLength - 1;
  }

  return swaps;
}

console.log(minSwaps([37, 100])); //1
console.log(minSwaps([22, 14, 33, 7])); //0
console.log(minSwaps([18, 43, 34, 16])); //2
