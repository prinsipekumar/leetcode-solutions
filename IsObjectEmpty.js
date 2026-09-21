var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

console.log(isEmpty({})); //true
console.log(isEmpty({ a: 1 })); //false
