var assignTasks = function(servers, tasks) {
    const n = servers.length;
    const m = tasks.length;
    
    const availableHeap = []; 
    const busyHeap = [];
    
    for (let i = 0; i < n; i++) {
        availableHeap.push(i);
    }

    const compareAvailable = (i, j) => {
        if (servers[i] !== servers[j]) return servers[i] - servers[j];
        return i - j;
    };
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        pushDownAvailable(availableHeap, i, compareAvailable);
    }

    const availableTime = new Float64Array(n); 
    
    const compareBusy = (i, j) => {
        if (availableTime[i] !== availableTime[j]) return availableTime[i] - availableTime[j];
        if (servers[i] !== servers[j]) return servers[i] - servers[j];
        return i - j;
    };
    
    const res = new Int32Array(m);
    let currTime = 0;
    
    for (let i = 0; i < m; i++) {
        currTime = Math.max(currTime, i);

        if (availableHeap.length === 0) {
            currTime = availableTime[busyHeap[0]];
        }

        while (busyHeap.length > 0 && availableTime[busyHeap[0]] <= currTime) {
            const sIdx = popHeap(busyHeap, compareBusy);
            pushHeap(availableHeap, sIdx, compareAvailable);
        }

        const sIdx = popHeap(availableHeap, compareAvailable);
        res[i] = sIdx;

        availableTime[sIdx] = currTime + tasks[i];
        pushHeap(busyHeap, sIdx, compareBusy);
    }
    
    return Array.from(res);
};

function pushHeap(heap, val, compare) {
    heap.push(val);
    let idx = heap.length - 1;
    while (idx > 0) {
        let pIdx = (idx - 1) >> 1;
        if (compare(heap[idx], heap[pIdx]) >= 0) break;
        let tmp = heap[idx]; heap[idx] = heap[pIdx]; heap[pIdx] = tmp;
        idx = pIdx;
    }
}

function popHeap(heap, compare) {
    const top = heap[0];
    const bottom = heap.pop();
    if (heap.length > 0) {
        heap[0] = bottom;
        pushDownAvailable(heap, 0, compare);
    }
    return top;
}

function pushDownAvailable(heap, idx, compare) {
    const len = heap.length;
    while ((idx << 1) + 1 < len) {
        let left = (idx << 1) + 1;
        let right = left + 1;
        let best = idx;
        
        if (compare(heap[left], heap[best]) < 0) best = left;
        if (right < len && compare(heap[right], heap[best]) < 0) best = right;
        if (best === idx) break;
        
        let tmp = heap[idx]; heap[idx] = heap[best]; heap[best] = tmp;
        idx = best;
    }
}

const sampleServers = [3, 3, 2];
const sampleTasks = [1, 2, 3, 2, 1, 2];

console.log(assignTasks(sampleServers, sampleTasks)); // [ 2, 2, 0, 2, 1, 2 ]
