var countIslands = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let ans = 0;

    function dfs(r, c) {
        let sum = grid[r][c] % k;
        grid[r][c] = 0;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nr < m &&
                nc >= 0 &&
                nc < n &&
                grid[nr][nc] > 0
            ) {
                sum = (sum + dfs(nr, nc)) % k;
            }
        }

        return sum;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                if (dfs(i, j) === 0) {
                    ans++;
                }
            }
        }
    }

    return ans;
};

const grid = [
    [0, 2, 1, 0],
    [0, 1, 1, 0],
    [3, 0, 0, 4]
];

const k = 3;

console.log(countIslands(grid, k)); // 1
