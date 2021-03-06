const divide = (dividend, divisor) => {
  // should the question specify an int range -> do below -> else skip to #6
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1;
  }
  if (divisor === 1) {
    return dividend;
  }
  let isNegative = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }
  let newDividend = Math.abs(dividend);
  const newDivisor = Math.abs(divisor);
  let result = 0;
  while (newDividend >= newDivisor) {
    newDividend = newDividend - newDivisor;
    result++;
  }
  return isNegative ? -result : result;
};

const dividend = 125;
const divisor = 5;
console.log(divide(dividend, divisor));
