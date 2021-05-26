const compose = (fns) => {
  return function (n) {
    let output = n;
    for (let i = fns.length - 1; i >= 0; i--) {
      output = fns[i](output);
    }
    return output;
  };
};

const add = function (a) {
  return a + 100;
};

const subtract = function (a) {
  return a - 1;
};

const multiply = function (a) {
  return a * 10;
};

console.log(compose([add, subtract, multiply])(5));
