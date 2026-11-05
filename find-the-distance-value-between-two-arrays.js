var findTheDistanceValue = function(arr1, arr2, d) {
    const OFFSET = 1000;
    const prefix = new Array(2002).fill(0);

    for (const num of arr2) {
        prefix[num + OFFSET + 1] = 1;
    }

    for (let i = 1; i < prefix.length; i++) {
        prefix[i] += prefix[i - 1];
    }

    let ans = 0;

    for (const num of arr1) {
        const left = Math.max(-1000, num - d) + OFFSET;
        const right = Math.min(1000, num + d) + OFFSET;

        const count = prefix[right + 1] - prefix[left];

        if (count === 0) ans++;
    }

    return ans;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
