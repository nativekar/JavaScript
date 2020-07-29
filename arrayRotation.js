const arrayRotation = (arr, d) => {
  const tempArr = [];
  let iterator = 0;
  if (arr.length < d) return -1;
  else if (arr.length === d) return arr.reverse();
  else
    while (iterator < d) {
      tempArr.push(arr.shift());
      iterator++;
    }
  return arr.concat(tempArr);
};

const arr = [1, 2, 3, 4, 5, 6];
const d = 3;
console.log(arrayRotation(arr, d));
