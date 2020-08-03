const maximumContigousSumArray = arr => {
  let iterator,
    maxSoFar = 0,
    maxEndingHere = 0;
  for (iterator = 0; iterator < arr.length; iterator++) {
    maxEndingHere = maxEndingHere + arr[iterator];
    if (maxEndingHere < 0) maxEndingHere = 0;
    else if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
  }
  return maxEndingHere;
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maximumContigousSumArray(arr));
