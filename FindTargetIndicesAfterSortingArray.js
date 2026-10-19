function targetIndices(nums, target) {
  let less = 0;
  let equal = 0;

  for (const num of nums) {
    if (num < target) {
      less++;
    } else if (num === target) {
      equal++;
    }
  }

  const result = [];

  for (let i = 0; i < equal; i++) {
    result.push(less + i);
  }

  return result;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2)); //[1, 2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); //[3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); //[4]
console.log(targetIndices([1, 2, 2, 2, 3], 2)); //[1, 2, 3]
console.log(targetIndices([2, 1, 2, 3, 2], 4)); //[]
