var scoreOfParentheses = function (s) {
  const stack = [0];

  for (let char of s) {
    if (char === "(") {
      stack.push(0);
    } else {
      let v = stack.pop();
      let score = v === 0 ? 1 : 2 * v;
      stack[stack.length - 1] += score;
    }
  }

  return stack[0];
};

console.log(scoreOfParentheses("()")); //1
console.log(scoreOfParentheses("(())")); //2
console.log(scoreOfParentheses("()()")); //2
console.log(scoreOfParentheses("(()(()))")); //6
