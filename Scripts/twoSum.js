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

const arr = [2, 3, 11, 5, 18, 7];
const value = 9;
console.log(twoSum(arr, value));
