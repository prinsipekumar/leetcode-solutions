var minInsertions = function (s) {
  let res = 0;
  let open = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else {
      if (i + 1 < s.length && s[i + 1] === ")") {
        i++;
        if (open > 0) {
          open--;
        } else {
          res++;
        }
      } else {
        if (open > 0) {
          open--;
          res++;
        } else {
          res += 2;
        }
      }
    }
  }

  res += open * 2;
  return res;
};

console.log(minInsertions("(()))")); //1
console.log(minInsertions("))())(")); //3
console.log(minInsertions("(((")); //6
