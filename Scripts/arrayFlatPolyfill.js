const flatten = (arr) => {
  if (arr === null || arr.length === 0) return [];
  const newArr = [];
  flattenHelper(newArr, arr);
  return newArr;
};

const flattenHelper = (newArr, currentArr) => {
  for (let i = 0; i < currentArr.length; i++) {
    if (Array.isArray(currentArr[i])) {
      flattenHelper(newArr, currentArr[i]);
    } else if (currentArr[i] !== null) {
      newArr.push(currentArr[i]);
    }
  }
};

const arr = [1, [[2], 3, 4, null], [[5]]];
console.log(flatten(arr)); // 1,2,3,4,5
