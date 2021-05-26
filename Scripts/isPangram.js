/* Given an array of strings, return a combination of 1s and 0s, 
            where 1 represents all strings that are a pangram */
const isPangram = (arr) => {
  if (arr.length === 0) return;
  const result = [];
  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/\s/g, "");
    result.push(removeDuplicateCharacters(arr[i]));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].length == 26) outputStr += "1";
    else outputStr += "0";
  }
  return outputStr;
};

function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

const arr = [
  "pack my box with five dozen liquor jugs",
  "abcdefghijkl mnopqrst uvw xyz",
  "hello world",
  "broken businesses",
];

console.log(isPangram(arr)); /* 1100 */
