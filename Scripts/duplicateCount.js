const duplicateCount = (inputArray) => {
  let totalRecurringCharacters = 0;
  const length = inputArray.length;
  if (length <= 0) return totalRecurringCharacters;
  else {
    const orderedSet = new Set(inputArray);
    const setLength = orderedSet.size;
    totalRecurringCharacters = length - setLength;
  }
  return totalRecurringCharacters;
};

const arr = [1, 3, 3, 4, 4, 4];
console.log(duplicateCount(arr));
