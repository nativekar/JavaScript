const firstUniqChar = (s) => {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) obj[[s[i]]] = 1;
    else obj[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == 1) return i;
  }
  return -1;
};

console.log(firstUniqChar(`leetcode`));
console.log(firstUniqChar(`aaaab`));
