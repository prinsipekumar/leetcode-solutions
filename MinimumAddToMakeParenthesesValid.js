var minAddToMakeValid = function (s) {
  let balance = 0;
  let additions = 0;

  for (let char of s) {
    if (char === "(") {
      balance++;
    } else {
      if (balance > 0) {
        balance--;
      } else {
        additions++;
      }
    }
  }

  return balance + additions;
};

console.log(minAddToMakeValid("()))((")); //4
console.log(minAddToMakeValid("()")); //0
console.log(minAddToMakeValid(")(")); //2
