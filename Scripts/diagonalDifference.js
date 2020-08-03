const diagonalDifference = (arr) => {
  let j = arr.length - 1,
    leftSum = 0,
    rightSum = 0;
  for (i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][j];
    j--;
  }
  const absoluteDiff = Math.abs(leftSum - rightSum);
  return absoluteDiff;
};

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(arr));
