Array.prototype.myReduce = function (fn, init) {
  let value = this;
  value.forEach((i) => {
    init = init !== undefined ? fn(init, i) : i;
  });
  return init;
};

const arr = [2, 3, 4, 5];
arr.myReduce((acc, val) => acc + val, 0);
