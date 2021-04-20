/* 
  returns the start and end index of all repeating characters
*/

const input = `helloooollo`;

function getRepeated(input) {
  let i = 0,
    resultArr = [];
  while (i < input.length) {
    if (i + 1 < input.length && input[i + 1] == input[i]) {
      let startIndex = i;
      while (i + 1 < input.length && input[i + 1] == input[i]) {
        i++;
      }
      resultArr.push([i, startIndex]);
    } else {
      i++;
    }
  }
  return resultArr;
}

console.log(getRepeated(input));
