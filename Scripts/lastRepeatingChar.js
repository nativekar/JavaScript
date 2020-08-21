const lastRepeatingChar = (inputStr) => {
  let arr = inputStr.split("");
  arr.sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  });

  console.log(arr);

  let arrSet = new Set(arr);

  console.log(arrSet);

  for (let el of arrSet) {
    const upperChar = el.toUpperCase();
    if (arrSet.has(upperChar)) {
      return upperChar;
    }
  }
  return undefined;
};

const str = "AbcadBeeAaCe";

console.log(lastRepeatingChar(str));
