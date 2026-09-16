var filter = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10)); //[20, 30]
console.log(filter([1, 2, 3], (n, i) => i === 0)); //[1]
