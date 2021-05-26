const stringCompression = (str) => {
  if (str?.length == 0) return `Please enter valid string.`;
  let outputString = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      if (count > 1) {
        outputString += str[i] + count;
        count = 0;
      } else outputString += str[i];
    }
  }
  console.log(outputString);
  return outputString;
};

console.log(stringCompression("")); //Please enter valid string.
stringCompression("aaaa"); //a4
stringCompression("aaaabbc"); //a4b2c
stringCompression("aaaabbcaabb"); //a4b2ca2b2
