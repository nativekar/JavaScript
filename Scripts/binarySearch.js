const binarySearch = (sortedArr, elementToFind) => {
  let iterator;
  let mid = Math.floor(sortedArr.length / 2);
  if (sortedArr[mid] === elementToFind) {
    return `${elementToFind} found at position ${mid}`;
  } else if (elementToFind > sortedArr[mid]) {
    for (iterator = mid + 1; iterator <= sortedArr.length; iterator++) {
      if (sortedArr[iterator] === elementToFind)
        return `${elementToFind} found at position ${iterator}`;
    }
  } else if (elementToFind < sortedArr[mid]) {
    for (iterator = 0; iterator < mid; iterator++) {
      if (sortedArr[iterator] === elementToFind)
        return `${elementToFind} found at position ${iterator}`;
    }
  }
  return `${elementToFind} not found within given array.`;
};

const sortedArr = [1, 3, 7, 9, 15, 18, 24];
const elementToFind = 24;
console.log(binarySearch(sortedArr, elementToFind));
