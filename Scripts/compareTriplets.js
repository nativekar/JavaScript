const compareTriplets = (a, b) => {
  let i,
    alice = 0,
    bob = 0,
    neutral = 0;
  let pointsArray = [];
  for (i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] === b[i]) neutral++;
    else if (b[i] > a[i]) {
      bob++;
    }
  }
  pointsArray.push(alice);
  pointsArray.push(bob);
  return pointsArray;
};

const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTriplets(a, b));
