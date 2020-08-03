const miniMaxSum = (arr) => {
  let minSum = 0,
    maxSum = 0;
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    minSum += arr[i];
  }
  maxSum = minSum - arr[0] + arr[length - 1];
  console.log(`${minSum} ${maxSum}`);
};

const arr = [396285104, 573261094, 759641832, 819230764, 364801279];
console.log(miniMaxSum(arr));
