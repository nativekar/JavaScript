const arr = [16, 8, 4, 2, 9, 15, 3];

/* const secondMaxProduct = (arr) => {
  let secondHighestProduct = 0;
  const sortedArr = arr.sort((a, b) => b - a);
  secondHighestProduct = sortedArr[0] * sortedArr[2];
  return secondHighestProduct;
}; */

/* a similar function for secondMaxSum */

/* const secondMaxSum = (arr) => {
  let secondHighestSum = 0;
  const sortedArr = arr.sort((a, b) => b - a);
  secondHighestSum = sortedArr[0] + sortedArr[2];
  return secondHighestSum;
}; */

/* refactoring to build a factory function */

const generatorFunction = (arr, operationType = "") => {
  let result = 0;
  const sortedArr = arr.sort((a, b) => b - a);
  const length = sortedArr.length;
  switch (operationType) {
    case "Sum":
      result = sortedArr[0] + sortedArr[2];
      break;
    case "Difference":
      result = sortedArr[0] - sortedArr[length - 2];
      break;
    case "Product":
      result = sortedArr[0] * sortedArr[2];
      break;
    default:
      return (result = "Operation type not provided or unsupported");
  }
  return result;
};

console.log(generatorFunction(arr, "Product"));
