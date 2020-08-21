/*This solution will work when the array has characters that don't recur more than once */

const duplicateCountOne = (inputArray) => {
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

/*This solution will work when the array has characters that recur more than once */

const duplicateCountTwo = (inputArray) => {
  let charMap = {};
  let recurringChars = 0;
  inputArray.forEach((num) => {
    if (!charMap[num]) {
      charMap[num] = { count: 1 };
    } else if (charMap[num] && charMap[num].count < 2) {
      charMap[num].count += 1;
      recurringChars++;
    }
  });
  console.log(charMap);
  return recurringChars;
};

const arr = [1, 3, 3, 4, 4, 4];
console.log(duplicateCountTwo(arr));
