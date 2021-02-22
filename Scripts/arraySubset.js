const a = ["A", "B", "C", "D"];
const b = ["C", "D"];

const arraySubset = (a, b) => {
  const result = b.every((v) => a.includes(v));
  return result;
};

console.log(arraySubset(a, b));
