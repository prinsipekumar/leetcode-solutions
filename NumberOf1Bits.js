function hammingWeight(n) {
    let count = 0;

    while (n !== 0) {
        n &= (n - 1);
        count++;
    }

    return count;
}

console.log(hammingWeight(11));  // 3
console.log(hammingWeight(128));  // 1
console.log(hammingWeight(2147483645));  // 30
