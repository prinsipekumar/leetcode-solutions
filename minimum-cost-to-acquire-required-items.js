var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    const calc = (x) =>
        x * costBoth +
        Math.max(0, need1 - x) * cost1 +
        Math.max(0, need2 - x) * cost2;

    const a = Math.min(need1, need2);
    const b = Math.max(need1, need2);

    return Math.min(
        calc(0),
        calc(a),
        calc(b)
    );
};

console.log(minimumCost(3, 2, 1, 3, 2)); // 3
