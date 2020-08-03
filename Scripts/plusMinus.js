const plusMinus = (arr) => {
  let i = 0;
  positive = 0;
  negative = 0;
  neither = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] === 0) neither++;
    else if (arr[i] < 0) negative++;
  }
  const positiveFraction = positive / arr.length;
  const negativeFraction = negative / arr.length;
  const zeroFraction = neither / arr.length;
  console.log("", positiveFraction, "\n", negativeFraction, "\n", zeroFraction);
};

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));
