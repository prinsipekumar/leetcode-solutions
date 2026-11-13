var countNonDecreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const nextGreater = Array(n).fill(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop();
        }

        if (stack.length) {
            nextGreater[i] = stack[stack.length - 1];
        }

        stack.push(i);
    }

    const prefix = Array(n + 1).fill(0n);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + BigInt(nums[i]);
    }

    let answer = 0n;
    let cost = 0n;
    let right = n - 1;
    const segments = [];

    for (let left = n - 1; left >= 0; left--) {
        let count = 1;

        while (
            segments.length &&
            segments[segments.length - 1].value < nums[left]
        ) {
            const top = segments.pop();

            cost += BigInt(nums[left] - top.value) * BigInt(top.count);
            count += top.count;
        }

        segments.push({
            value: nums[left],
            count
        });

        while (cost > BigInt(k)) {
            const idx = right;
            let remaining = 0;

            for (let p = segments.length - 1; p >= 0; p--) {
                remaining += segments[p].count;

                if (remaining > right - left) {
                    const seg = segments[p];

                    cost -= BigInt(seg.value - nums[idx]);

                    seg.count--;

                    if (seg.count === 0) {
                        segments.splice(p, 1);
                    }

                    break;
                }
            }

            right--;
        }

        answer += BigInt(right - left + 1);
    }

    return Number(answer);
};

const nums = [6, 3, 1, 2, 4, 4];
const k = 7;

console.log(countNonDecreasingSubarrays(nums, k));  //17
