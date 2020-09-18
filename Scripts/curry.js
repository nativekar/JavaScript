const makeCurry = (arr) => {
  let curry = "";
  const length = arr.length;
  if (length < 3) return `noLuck`;
  if (length == 3) {
    for (let x = 0; x < length; x++) {
      if (arr[x] == arr[x + 1]) return `PQR`;
    }
  } else {
    const totalWeights = arr.reduce((acc, val) => acc + val, 0);
    const commonDenom = totalWeights / 3;
    const curryString = {};
    let returnedValue;
    for (let x = 0; x < length; x++) {
      if (arr[x] == commonDenom) {
        curryString.key = x;
        curryString.value = arr[x];
      } else {
        returnedValue = twoSum(arr, commonDenom, length);
      }
    }
    if (curryString.key === 0) {
      curry = "P";
    } else if (curryString.key === 1) {
      curry = "Q";
    } else if (curryString.key === 2) {
      curry = "R";
    }
    return curry;
  }
  return `noLuck`;
};

const twoSum = (arr = [], target = 0, length = 0) => {
  const temp = new Map();
  for (let x = 0; x < length; x++) {
    if (temp[arr[x]] >= 0) {
      return [temp[arr[x]], x];
    }
    temp[target - arr[x]] = x;
  }
  return [];
};

const ingArray = [3, 7, 2, 5, 4];
console.log(makeCurry(ingArray));
