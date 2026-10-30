var shortestPath = function (n, edges, labels, k) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
    }

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        bubbleUp(idx) {
            const heap = this.heap;

            while (idx > 0) {
                let parent = (idx - 1) >> 1;

                if (heap[parent][0] <= heap[idx][0]) break;

                [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
                idx = parent;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);

            return top;
        }

        bubbleDown(idx) {
            const heap = this.heap;
            const n = heap.length;

            while (true) {
                let smallest = idx;
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;

                if (
                    left < n &&
                    heap[left][0] < heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < n &&
                    heap[right][0] < heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === idx) break;

                [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
                idx = smallest;
            }
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }

    const dist = Array.from(
        { length: n },
        () => Array(k + 1).fill(Infinity)
    );

    const pq = new MinHeap();

    dist[0][1] = 0;
    pq.push([0, 0, 1]);

    while (!pq.isEmpty()) {
        const [cost, node, cnt] = pq.pop();

        if (cost > dist[node][cnt]) continue;

        if (node === n - 1) return cost;

        for (const [nextNode, weight] of graph[node]) {
            let nextCnt =
                labels[node] === labels[nextNode]
                    ? cnt + 1
                    : 1;

            if (nextCnt > k) continue;

            const nextCost = cost + weight;

            if (nextCost < dist[nextNode][nextCnt]) {
                dist[nextNode][nextCnt] = nextCost;
                pq.push([nextCost, nextNode, nextCnt]);
            }
        }
    }

    return -1;
};

const n = 3;
const edges = [[0, 1, 1], [1, 2, 1], [0, 2, 3]];
const labels = "aab";
const k = 2;

console.log(shortestPath(n, edges, labels, k)); // 2
