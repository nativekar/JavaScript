const escapeRegExp = (string) => {
  return string.replace(/[.*+?^$()|[\]\\]/g, "\\$&");
};

const replaceString = (str) => {
  const term = "{{str";
  const term2 = "}}";
  const replacement = "string";
  let s1, s2;
  s1 = str.replace(new RegExp(escapeRegExp(term), "g"), replacement);
  s2 = s1.replace(new RegExp(escapeRegExp(term2), "g"), "");
  return s2;
};

const string = "string {{str1}} {{str2}} string {{str3}}";
console.log(replaceString(string));
