const lastRepeatingChar = (inputStr) => {
  let arr = inputStr.split("").sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  });
  let arrSet = new Set(arr);
  for (let el of arrSet) {
    const upperChar = el.toUpperCase();
    if (arrSet.has(upperChar)) {
      return upperChar;
    }
  }
  return `No recurring character found`;
};

const str = "AabBcdeEf";

console.log(lastRepeatingChar(str));
