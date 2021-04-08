const arr = [2, 3, 11, 5, 18, 7];
const value = 9;
/* 
Standard approach - #1 (returns only 1 pair)
space - O(n);
time - O(n) 
*/
// #1
const twoSum = (arr = [], target = 0) => {
  const previousValues = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const neededValue = target - currentValue;
    if (previousValues[neededValue] != null) {
      return [previousValues[neededValue], i];
    } else {
      previousValues[currentValue] = i;
    }
  }
};
console.log(twoSum(arr, value));

/* 
Standard approach - #2 (returns n distinct pairs with k sum)
space - O(n);
time - O(n) 
*/
// #2
const pairsWithGivenSum = (arr = [], target = 0) => {
  const numMap = {};
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i <= length; i++) {
    const currentValue = arr[i];
    const neededValue = target - arr[i];
    if (numMap[neededValue] != null) {
      newArr.push([numMap[neededValue], i]);
    } else numMap[currentValue] = i;
  }
  return newArr;
};
console.log(pairsWithGivenSum(arr, target));

/* 
Standard approach - #3 (returns n distinct pairs with k sum in O(1) space)
space - O(1);
time - O(n log n) 
*/
// #3
const twoSumWithoutSpace = (arr = [], target = 0) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let sum = 0;
  const solution = [];
  while (startIndex < endIndex) {
    sum = arr[startIndex] + arr[endIndex];
    if (sum > target) endIndex--;
    if (sum == target) {
      console.log(startIndex, endIndex);
      solution.push([arr[startIndex], arr[endIndex]]);
      endIndex-- && startIndex++;
    }
    if (sum < target) startIndex++;
  }
  return solution;
};
console.log(twoSumWithoutSpace(arr, target));
