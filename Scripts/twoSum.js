const twoSum = (arr = [], target = 0) => {
  const previousValues = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const neededValue = target - currentValue;
    const index = previousValues[neededValue];
    if (index) {
      return [index, i];
    } else {
      previousValues[currentValue] = i;
    }
  }
};

const arr = [2, 7, 11, 15, 18, 22];
const value = 40;
console.log(twoSum(arr, value));
