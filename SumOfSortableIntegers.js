var sortableIntegers = function (nums) {
  const n = nums.length;

  const prefMax = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefMax[i + 1] = Math.max(prefMax[i], nums[i]);
  }

  const suffMin = Array(n + 1).fill(Infinity);
  for (let i = n - 1; i >= 0; i--) {
    suffMin[i] = Math.min(suffMin[i + 1], nums[i]);
  }

  const prefDrop = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefDrop[i] = prefDrop[i - 1] + (nums[i - 1] > nums[i] ? 1 : 0);
  }

  const check = (k) => {
    for (let l = 0; l < n; l += k) {
      const r = l + k - 1;

      let drops = prefDrop[r] - (l > 0 ? prefDrop[l] : 0);

      if (nums[r] > nums[l]) drops++;

      if (drops > 1) return false;

      let pivot = l;

      for (let i = l + 1; i <= r; i++) {
        if (nums[i] < nums[pivot]) {
          pivot = i;
        }
      }

      const blockMin = nums[pivot];
      const blockMax = nums[l + ((pivot - l + k - 1) % k)];

      if (prefMax[l] > blockMin) return false;
      if (blockMax > suffMin[r + 1]) return false;
    }

    return true;
  };

  let ans = 0;

  for (let d = 1; d * d <= n; d++) {
    if (n % d !== 0) continue;

    if (check(d)) ans += d;

    const other = n / d;
    if (other !== d && check(other)) {
      ans += other;
    }
  }

  return ans;
};

console.log(sortableIntegers([3, 1, 2])); //3
console.log(sortableIntegers([7, 6, 5])); //0
console.log(sortableIntegers([5, 8])); //3
