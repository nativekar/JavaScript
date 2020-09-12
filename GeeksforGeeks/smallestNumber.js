const nextSmallest = (x) => {
  const pOfX = getDivisors(x);
  let pOfY = null;
  let y = x + 1;
  while (true) {
    pOfY = getDivisors(y);
    if (pOfY === pOfX) {
      y++;
    } else {
      break;
    }
  }
  return y;
};

const getDivisors = (input) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      if (input / i == i) divisors.push(i);
      else {
        divisors.push(i);
        divisors.push(input / i);
      }
    }
  }
  return isOddOrEven(divisors.length);
};

const isOddOrEven = (n) => (n % 2 == 0 ? (n = 0) : (n = 1));

const number = 7;
console.log(nextSmallest(number));
