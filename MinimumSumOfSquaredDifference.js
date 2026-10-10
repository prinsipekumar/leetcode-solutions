var minSumSquareDiff = function (nums1, nums2, k1, k2) {
  const n = nums1.length;
  let diff = new Array(n);
  let total = 0,
    maxDiff = 0;

  for (let i = 0; i < n; i++) {
    diff[i] = Math.abs(nums1[i] - nums2[i]);
    total += diff[i];
    maxDiff = Math.max(maxDiff, diff[i]);
  }

  let k = k1 + k2;
  if (total <= k) return 0;

  let left = 0,
    right = maxDiff;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let reduce = 0;
    for (let d of diff) {
      reduce += Math.max(d - mid, 0);
    }
    if (reduce <= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (diff[i] > left) {
      k -= diff[i] - left;
      diff[i] = left;
    }
  }

  for (let i = 0; i < n && k > 0; i++) {
    if (diff[i] === left && diff[i] > 0) {
      diff[i]--;
      k--;
    }
  }

  let result = 0n;
  for (let d of diff) {
    result += BigInt(d) * BigInt(d);
  }
  return Number(result);
};

console.log(minSumSquareDiff([1, 2, 3], [2, 3, 4], 1, 2)); //0
