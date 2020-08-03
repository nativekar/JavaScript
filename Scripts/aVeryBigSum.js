const aVeryBigSum = (ar) => {
  const arr = ar.reduce((a, b) => a + b, 0);
  return arr;
};

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr));
