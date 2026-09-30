function maxDepthAfterSplit(seq) {
  const res = [];
  let depth = 0;

  for (let ch of seq) {
    if (ch === "(") {
      depth++;
      res.push(depth % 2);
    } else {
      res.push(depth % 2);
      depth--;
    }
  }

  return res;
}

const input = "(()())";
console.log("Input:", input);
console.log("Output:", maxDepthAfterSplit(input)); //[1, 0, 0, 0, 0, 1]
