var busiestServers = function (k, arrival, load) {
    class BusyHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);

            let i = this.heap.length - 1;

            while (i > 0) {
                let p = (i - 1) >> 1;

                if (this.heap[p][0] <= this.heap[i][0]) break;

                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();

            let i = 0;

            while (true) {
                let smallest = i;
                let left = i * 2 + 1;
                let right = i * 2 + 2;

                if (
                    left < this.heap.length &&
                    this.heap[left][0] < this.heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][0] < this.heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] = [
                    this.heap[smallest],
                    this.heap[i],
                ];

                i = smallest;
            }

            return top;
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }
    }

    const busy = new BusyHeap();
    const available = [];

    for (let i = 0; i < k; i++) {
        available.push(i);
    }

    const count = Array(k).fill(0);

    for (let i = 0; i < arrival.length; i++) {
        while (busy.size() && busy.peek()[0] <= arrival[i]) {
            const [, server] = busy.pop();

            let left = 0;
            let right = available.length;

            while (left < right) {
                const mid = (left + right) >> 1;

                if (available[mid] < server) left = mid + 1;
                else right = mid;
            }

            available.splice(left, 0, server);
        }

        if (available.length === 0) continue;

        let target = i % k;

        let left = 0;
        let right = available.length;

        while (left < right) {
            const mid = (left + right) >> 1;

            if (available[mid] < target) left = mid + 1;
            else right = mid;
        }

        let idx = left;

        if (idx === available.length) idx = 0;

        const server = available[idx];

        available.splice(idx, 1);

        count[server]++;

        busy.push([arrival[i] + load[i], server]);
    }

    const maxCount = Math.max(...count);
    const result = [];

    for (let i = 0; i < k; i++) {
        if (count[i] === maxCount) {
            result.push(i);
        }
    }

    return result;
};

const k = 3;
const arrival = [1, 2, 3, 4, 5];
const load = [5, 2, 3, 3, 3];

console.log(busiestServers(k, arrival, load)); // [1]
