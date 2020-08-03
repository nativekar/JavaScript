const zerosAndOnes = inputArray => {
  let iterator,
    count = 0,
    arrayLength = inputArray.length;
  for (iterator = 0; iterator <= arrayLength; iterator++) {
    if (inputArray[iterator] === 0) count++;
  }

  for (iterator = 0; iterator < count; iterator++) {
    inputArray[iterator] = 0;
  }

  for (iterator = count; iterator < arrayLength; iterator++) {
    inputArray[iterator] = 1;
  }
  return inputArray;
};

const zerosAndOnesArray = [1, 0, 0, 0, 1, 1];
console.log(zerosAndOnes(zerosAndOnesArray));
