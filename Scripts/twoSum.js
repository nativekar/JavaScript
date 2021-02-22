const twoSum = (arr = [], target = 0) => {
  const previousValues = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const neededValue = target - currentValue;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentValue] = i;
    }
  }
};

const arr = [2, 7, 11, 15, 18, 22];
const value = 40;
console.log(twoSum(arr, value));
