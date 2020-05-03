const subArrayWithGivenSum = (arr, sum) => {
  let iterator,
    currentSum = arr[0],
    start = 0;
  for (iterator = 1; iterator < arr.length; iterator++) {
    while (currentSum > sum && sum < iterator - 1) {
      currentSum = currentSum - arr[start];
      start++;
    }
    if (currentSum === sum) {
      const p = iterator - 1;
      return `Sum found between indices ${start} and ${p}`;
    }
    if (iterator < arr.length) currentSum = currentSum + arr[iterator];
  }
  return `No subarray found`;
};

const arr = [10, 3, 1, 6, 7, 15, 2, 12, 23, 34];
const sum = 42;
console.log(subArrayWithGivenSum(arr, sum));