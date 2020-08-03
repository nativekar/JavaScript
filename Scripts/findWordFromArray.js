const findWord = (word, arr) => {
  let wordMap = {};
  // Build a map with subStringIndex and subString
  for (let i = 0; i < arr.length; i++) {
    let substringIndex = word.indexOf(arr[i]);
    if (substringIndex > -1 && !wordMap[substringIndex]) {
      wordMap[substringIndex] = arr[i];
    }
  }
  // Sort the indexes in map
  const keys = Object.keys(wordMap).sort();

  // Iterate over keys and check the word
  let buildWord = "";
  for (let k in keys) {
    buildWord += wordMap[keys[k]];
  }

  return buildWord === word ? true : -1;
};

const word = "helloworld";
const arr = ["world", "po", "pu", "lar", "hello"];
console.log(findWord(word, arr));
