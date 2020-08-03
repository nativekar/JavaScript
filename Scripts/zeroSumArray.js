const zeroSumArray = arraySize => {
  const arr = [];
  let iterator;
  if (arraySize === 0 || arraySize === 1) return 0;
  else if (arraySize % 2 === 0) {
    for (iterator = 1; iterator < arraySize; iterator++) {
      if (arraySize === arr.length) {
        break;
      }
      arr.push(iterator);
      arr.push(-iterator);
    }
    return arr;
  } else if (arraySize % 2 !== 0 && arraySize > 1) {
    for (iterator = 1; iterator < arraySize; iterator++) {
      if (arraySize === arr.length + 1) {
        break;
      }
      arr.push(iterator);
      arr.push(-iterator);
    }
  }
  arr.push(0);
  return arr;
};

const arrayRange = 1;
console.log(zeroSumArray(arrayRange));
