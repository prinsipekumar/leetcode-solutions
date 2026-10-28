var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const MAX_XOR = 1024;

    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Uint8Array(MAX_XOR))
    );

    dp[0][0][grid[0][0]] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            for (let x = 0; x < MAX_XOR; x++) {
                if (i > 0 && dp[i - 1][j][x]) {
                    dp[i][j][x ^ grid[i][j]] = 1;
                }

                if (j > 0 && dp[i][j - 1][x]) {
                    dp[i][j][x ^ grid[i][j]] = 1;
                }
            }
        }
    }

    for (let x = 0; x < MAX_XOR; x++) {
        if (dp[m - 1][n - 1][x]) {
            return x;
        }
    }

    return 0;
};

const grid = [
    [1, 2],
    [3, 4]
];

console.log(minCost(grid)); //6
