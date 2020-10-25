const findAnagrams = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  return sortString(word1) === sortString(word2);
};

const sortString = (str) => {
  return str.split("").sort().join("");
};

console.log(findAnagrams("cinema", "iceman"));
