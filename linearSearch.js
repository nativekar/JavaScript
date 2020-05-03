const linearSearch = (arr, elementToFind) => {
  let iterator;
  for (iterator = 0; iterator <= arr.length; iterator++) {
    if (arr[iterator] === elementToFind)
      return `${elementToFind} found at position ${iterator}`;
  }
  return `${elementToFind} not found within given array.`;
};

const arr = [9, 1, 0, 0, 0, 7, 0, 0, 4, 4];
const elementToFind = 7;
console.log(linearSearch(arr, elementToFind));
