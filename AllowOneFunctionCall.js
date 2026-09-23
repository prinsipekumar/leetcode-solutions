var once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
};

function sum(a, b, c) {
  return a + b + c;
}

const onceSum = once(sum);

console.log(onceSum(1, 2, 3)); //6
console.log(onceSum(2, 3, 6)); //undefined
