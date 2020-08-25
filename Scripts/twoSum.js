const twoSum = (arr = [], target = 0) => {
  const temp = new Map();
  const len = arr.length;
  for (let x = 0; x < len; x++) {
    if (temp[arr[x]] >= 0) {
      return [temp[arr[x]], x];
    }
    temp[target - arr[x]] = x;
  }
  return [];
};

const arr = [2, 5, 7, 9, 11];
const value = 16;
console.log(twoSum(arr, value));
