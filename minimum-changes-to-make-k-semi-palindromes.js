var minimumChanges = function(s, k) {
    const n = s.length;

    const divisors = Array.from({ length: n + 1 }, () => []);

    for (let len = 2; len <= n; len++) {
        for (let d = 1; d < len; d++) {
            if (len % d === 0) divisors[len].push(d);
        }
    }

    const cost = Array.from({ length: n }, () => Array(n).fill(0));

    for (let l = 0; l < n; l++) {
        for (let r = l + 1; r < n; r++) {
            const len = r - l + 1;

            let best = Infinity;

            for (const d of divisors[len]) {
                let changes = 0;

                for (let start = 0; start < d; start++) {
                    const chars = [];

                    for (let pos = start; pos < len; pos += d) {
                        chars.push(l + pos);
                    }

                    let i = 0;
                    let j = chars.length - 1;

                    while (i < j) {
                        if (s[chars[i]] !== s[chars[j]]) changes++;
                        i++;
                        j--;
                    }
                }

                best = Math.min(best, changes);
            }

            cost[l][r] = best;
        }
    }

    const dp = Array.from({ length: k + 1 }, () =>
        Array(n + 1).fill(Infinity)
    );

    dp[0][0] = 0;

    for (let parts = 1; parts <= k; parts++) {
        for (let end = parts * 2; end <= n; end++) {
            for (let start = (parts - 1) * 2; start <= end - 2; start++) {
                dp[parts][end] = Math.min(
                    dp[parts][end],
                    dp[parts - 1][start] + cost[start][end - 1]
                );
            }
        }
    }

    return dp[k][n];
};

console.log(minimumChanges("abcac", 2));  // 1
console.log(minimumChanges("abcdef", 2));  // 2
