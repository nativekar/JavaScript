const replaceAllWithFives = (n) => {
  let digit;
  digit = n % 10;
  if (digit === 0) digit = 5;
  const value = (n / 10) * 10 + digit;
  return value;
};

const convert0s = (num) => {
  if (num === 0) return 5;
  else return replaceAllWithFives(num);
};
const num = 10030405;
console.log(convert0s(num));
