const thirdLargest = (n, length) => {
  if (length < 3) return -1;
  else n.sort((a, b) => b - a);
  return n[2];
};

const arr = [10, 2, 30, -7, 14, 6];
const length = arr.length;
console.log(thirdLargest(arr, length));
