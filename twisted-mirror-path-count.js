var uniquePaths = function (grid) {
    const MOD = 1000000007;
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [0, 0])
    );

    dp[0][0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                if (grid[i - 1][j] === 0) {
                    dp[i][j][0] =
                        (dp[i - 1][j][0] + dp[i - 1][j][1]) % MOD;
                } else {
                    dp[i][j][0] = dp[i - 1][j][1];
                }
            }

            if (j > 0) {
                if (grid[i][j - 1] === 0) {
                    dp[i][j][1] =
                        (dp[i][j - 1][0] + dp[i][j - 1][1]) % MOD;
                } else {
                    dp[i][j][1] = dp[i][j - 1][0];
                }
            }
        }
    }

    return (dp[m - 1][n - 1][0] + dp[m - 1][n - 1][1]) % MOD;
};

const grid = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0]
];

console.log(uniquePaths(grid)); //3
