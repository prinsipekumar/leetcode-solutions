var palindromePath = function (n, edges, s, queries) {
    const g = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    const parent = Array(n).fill(-1);
    const depth = Array(n).fill(0);
    const size = Array(n).fill(0);
    const heavy = Array(n).fill(-1);

    function dfs(u, p) {
        parent[u] = p;
        size[u] = 1;

        let best = 0;

        for (const v of g[u]) {
            if (v === p) continue;

            depth[v] = depth[u] + 1;
            dfs(v, u);

            size[u] += size[v];

            if (size[v] > best) {
                best = size[v];
                heavy[u] = v;
            }
        }
    }

    dfs(0, -1);

    const head = Array(n);
    const pos = Array(n);
    const base = Array(n);

    let timer = 0;

    function decompose(u, h) {
        head[u] = h;
        pos[u] = timer;

        base[timer++] = 1 << (s.charCodeAt(u) - 97);

        if (heavy[u] !== -1) {
            decompose(heavy[u], h);
        }

        for (const v of g[u]) {
            if (v === parent[u] || v === heavy[u]) continue;
            decompose(v, v);
        }
    }

    decompose(0, 0);

    class SegmentTree {
        constructor(arr) {
            this.n = arr.length;
            this.seg = new Array(this.n * 4).fill(0);
            this.build(1, 0, this.n - 1, arr);
        }

        build(node, l, r, arr) {
            if (l === r) {
                this.seg[node] = arr[l];
                return;
            }

            const mid = (l + r) >> 1;

            this.build(node * 2, l, mid, arr);
            this.build(node * 2 + 1, mid + 1, r, arr);

            this.seg[node] =
                this.seg[node * 2] ^
                this.seg[node * 2 + 1];
        }

        update(node, l, r, idx, val) {
            if (l === r) {
                this.seg[node] = val;
                return;
            }

            const mid = (l + r) >> 1;

            if (idx <= mid) {
                this.update(node * 2, l, mid, idx, val);
            } else {
                this.update(node * 2 + 1, mid + 1, r, idx, val);
            }

            this.seg[node] =
                this.seg[node * 2] ^
                this.seg[node * 2 + 1];
        }

        query(node, l, r, ql, qr) {
            if (ql <= l && r <= qr) {
                return this.seg[node];
            }

            let res = 0;
            const mid = (l + r) >> 1;

            if (ql <= mid) {
                res ^= this.query(node * 2, l, mid, ql, qr);
            }

            if (qr > mid) {
                res ^= this.query(node * 2 + 1, mid + 1, r, ql, qr);
            }

            return res;
        }
    }

    const seg = new SegmentTree(base);
    const chars = s.split("");

    function pathXor(u, v) {
        let res = 0;

        while (head[u] !== head[v]) {
            if (depth[head[u]] < depth[head[v]]) {
                [u, v] = [v, u];
            }

            res ^= seg.query(
                1,
                0,
                n - 1,
                pos[head[u]],
                pos[u]
            );

            u = parent[head[u]];
        }

        if (depth[u] > depth[v]) {
            [u, v] = [v, u];
        }

        res ^= seg.query(
            1,
            0,
            n - 1,
            pos[u],
            pos[v]
        );

        return res;
    }

    const ans = [];

    for (const q of queries) {
        const parts = q.split(" ");

        if (parts[0] === "update") {
            const node = Number(parts[1]);
            const ch = parts[2];

            chars[node] = ch;

            seg.update(
                1,
                0,
                n - 1,
                pos[node],
                1 << (ch.charCodeAt(0) - 97)
            );
        } else {
            const u = Number(parts[1]);
            const v = Number(parts[2]);

            const mask = pathXor(u, v);

            ans.push((mask & (mask - 1)) === 0);
        }
    }

    return ans;
};

const n = 3;
const edges = [
    [0, 1],
    [1, 2]
];
const s = "aba";
const queries = [
    "query 0 2",
    "update 1 c",
    "query 0 2"
];

console.log(palindromePath(n, edges, s, queries)); // [true, true]
