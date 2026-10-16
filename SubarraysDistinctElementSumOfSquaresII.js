function sumCounts(nums) {
  const MOD = 1_000_000_007n;
  const n = nums.length;

  class SegmentTree {
    constructor(n) {
      this.n = n;
      this.sum = new Array(4 * n).fill(0n);
      this.square = new Array(4 * n).fill(0n);
      this.lazy = new Array(4 * n).fill(0n);
    }

    propagate(i, l, r) {
      if (this.lazy[i] !== 0n) {
        const len = BigInt(r - l + 1);
        this.square[i] =
          (this.square[i] +
            2n * this.lazy[i] * this.sum[i] +
            this.lazy[i] * this.lazy[i] * len) %
          MOD;
        this.sum[i] = (this.sum[i] + this.lazy[i] * len) % MOD;
        if (l < r) {
          this.lazy[i * 2 + 1] += this.lazy[i];
          this.lazy[i * 2 + 2] += this.lazy[i];
        }
        this.lazy[i] = 0n;
      }
    }

    updateRange(i, l, r, ql, qr) {
      this.propagate(i, l, r);
      if (r < ql || l > qr) return;
      if (ql <= l && r <= qr) {
        this.lazy[i] += 1n;
        this.propagate(i, l, r);
        return;
      }
      const mid = Math.floor((l + r) / 2);
      this.updateRange(i * 2 + 1, l, mid, ql, qr);
      this.updateRange(i * 2 + 2, mid + 1, r, ql, qr);
      this.sum[i] = (this.sum[i * 2 + 1] + this.sum[i * 2 + 2]) % MOD;
      this.square[i] = (this.square[i * 2 + 1] + this.square[i * 2 + 2]) % MOD;
    }

    update(l, r) {
      this.updateRange(0, 0, this.n - 1, l, r);
    }

    getSquareSum() {
      return this.square[0];
    }
  }

  const tree = new SegmentTree(n);
  const lastSeen = new Map();
  let ans = 0n;

  for (let i = 0; i < n; i++) {
    const prev = lastSeen.has(nums[i]) ? lastSeen.get(nums[i]) + 1 : 0;
    tree.update(prev, i);
    lastSeen.set(nums[i], i);
    ans = (ans + tree.getSquareSum()) % MOD;
  }

  return Number(ans);
}

const nums = [2, 2, 5, 5];
console.log(sumCounts(nums)); //22
