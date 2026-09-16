var reduce = function (nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};

console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); //10
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc * curr, 1)); //24
