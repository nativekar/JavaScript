const minimumSum = arr => {
  if (arr.length < 2) return -1;
  let minSum = 0;
  if (arr.length > 2) {
    arr.sort((a, b) => a - b);
    minSum = arr[0] + arr[1];
  }
  minSum = arr[0] + arr[1];
  return minSum;
};

// minor tweak to return maxSum by sorting the array in descending order
const maximumSum = arr => {
  if (arr.length < 2) return -1;
  let maxSum = 0;
  if (arr.length > 2) {
    arr.sort((a, b) => b - a);
    maxSum = arr[0] + arr[1];
  }
  maxSum = arr[0] + arr[1];
  return maxSum;
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(minimumSum(arr));
console.log(maximumSum(arr));
