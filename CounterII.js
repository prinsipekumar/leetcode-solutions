var createCounter = function (init) {
  let value = init;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = init),
  };
};

const counter = createCounter(5);
console.log(counter.increment()); //6
console.log(counter.reset()); //5
console.log(counter.decrement()); //4
