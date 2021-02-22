const str = "This is a test string. It is used to test";

const maxCharCount = (str) => {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!charMap[str[i]] && str[i].trim() != "") {
      charMap[str[i].toLowerCase()] = { count: 1 };
    } else if (charMap[str[i]]) {
      charMap[str[i].toLowerCase()].count += 1;
    }
  }
  return getMax(charMap);
};

const getMax = (charMap = {}) => {
  const sortable = [];
  for (let char in charMap) {
    sortable.push([char, charMap[char]]);
  }
  sortable.sort((a, b) => b[1].count - a[1].count);
  return sortable[0];
};

console.log(maxCharCount(str));
