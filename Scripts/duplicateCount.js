// const duplicateCount = (inputArray) => {
//   let totalRecurringCharacters = 0;
//   const length = inputArray.length;
//   if (length <= 0) return totalRecurringCharacters;
//   else {
//     const orderedSet = new Set(inputArray);
//     const setLength = orderedSet.size;
//     totalRecurringCharacters = length - setLength;
//   }
//   return totalRecurringCharacters;
// };

const solution = (inputArray) => {
  let numMap = {};
  let recurringChars = 0;
  inputArray.forEach((num) => {
    if (numMap[num] && numMap[num].count < 2) {
      numMap[num].count += 1;
      recurringChars++;
    } else if (!numMap[num]) {
      numMap[num] = { count: 1 };
    }
  });
  return recurringChars;
};

const arr = [1, 3, 5, 3, 4, 4, 4, 5, 2, 1];
// console.log(duplicateCount(arr));
console.log(solution(arr));
