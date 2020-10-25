const numberToOrdinal = (n) => {
  let j = n % 10,
    k = n % 100;
  l = n % 1000;
  if ((j == 0) & (k == 0) & (l == 0)) {
    return 0;
  }
  if (j == 1 && k != 11 && l !== 11) {
    return n + "st";
  }
  if (j == 2 && k != 12 && l !== 12) {
    return n + "nd";
  }
  if (j == 3 && k != 13 && l !== 13) {
    return n + "rd";
  }
  return n + "th";
};

const n = 500;
console.log(numberToOrdinal(n));
