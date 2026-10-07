function removeInvalidParentheses(s) {
  const res = new Set();
  let leftRem = 0,
    rightRem = 0;

  for (let ch of s) {
    if (ch === "(") {
      leftRem++;
    } else if (ch === ")") {
      if (leftRem > 0) leftRem--;
      else rightRem++;
    }
  }

  function dfs(index, path, leftCount, rightCount, leftRem, rightRem) {
    if (index === s.length) {
      if (leftRem === 0 && rightRem === 0 && leftCount === rightCount) {
        res.add(path);
      }
      return;
    }

    const ch = s[index];

    if (ch === "(" && leftRem > 0) {
      dfs(index + 1, path, leftCount, rightCount, leftRem - 1, rightRem);
    }
    if (ch === ")" && rightRem > 0) {
      dfs(index + 1, path, leftCount, rightCount, leftRem, rightRem - 1);
    }

    if (ch !== "(" && ch !== ")") {
      dfs(index + 1, path + ch, leftCount, rightCount, leftRem, rightRem);
    } else if (ch === "(") {
      dfs(index + 1, path + ch, leftCount + 1, rightCount, leftRem, rightRem);
    } else if (ch === ")" && rightCount < leftCount) {
      dfs(index + 1, path + ch, leftCount, rightCount + 1, leftRem, rightRem);
    }
  }

  dfs(0, "", 0, 0, leftRem, rightRem);
  return Array.from(res);
}

console.log(removeInvalidParentheses("()())()")); // ["()()()", "(())()"]

console.log(removeInvalidParentheses("(a)())()")); // ["(a)()()", "(a())()"]

console.log(removeInvalidParentheses(")(")); // [""]
