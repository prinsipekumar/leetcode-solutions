var chunk = function (arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); //[[1,2],[3,4],[5]]

console.log(chunk([1, 9, 6, 3, 2], 3)); //[[1,9,6],[3,2]]

console.log(chunk([8, 5, 3], 1)); //[[8],[5],[3]]
