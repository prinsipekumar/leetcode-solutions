var checkValidString = function (s) {
  let minOpen = 0,
    maxOpen = 0;

  for (let char of s) {
    if (char === "(") {
      minOpen++;
      maxOpen++;
    } else if (char === ")") {
      minOpen--;
      maxOpen--;
    } else {
      minOpen--;
      maxOpen++;
    }

    if (maxOpen < 0) return false;
    if (minOpen < 0) minOpen = 0;
  }

  return minOpen === 0;
};

console.log(checkValidString("(*)")); //true
console.log(checkValidString("(*))")); //true
console.log(checkValidString("((*)")); //true
console.log(checkValidString("(((*)")); //false
