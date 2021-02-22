const findMedian = (arr1 = [], arr2 = []) => {
  const combinedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  const midPoint = Math.floor(combinedArr.length / 2);
  return combinedArr.length % 2 !== 0
    ? combinedArr[midPoint]
    : (combinedArr[midPoint] + combinedArr[midPoint - 1]) / 2;
};

const arr1 = [1, 3, 4, 6];
const arr2 = [7, 9, 2];

console.log(findMedian(arr1, arr2));
