const lastRepeatingChar = (inputStr) => {
  let arr = inputStr.split("");
  arr.sort();
  let arrSet = new Set(arr);
  let charMap = {};
  let recurringChar = "";
  for (let el of arrSet) {
    const lowerEl = el.toLowerCase();
    if (!charMap[lowerEl]) {
      charMap[lowerEl] = 1;
    } else if (recurringChar < lowerEl) {
      recurringChar = lowerEl;
    }
  }
  return recurringChar;
};

const str = "AbcadBeeAaCe";

console.log(lastRepeatingChar(str));
