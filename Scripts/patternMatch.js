const patternMatch = (str) => {
  const pattern = "{{str1}}";
  let match = false;
  let indexOfPattern = 0;
  if (str.includes(pattern)) {
    match = true;
    indexOfPattern = str.indexOf(pattern);
  } else match = false;
  return {match, indexOfPattern};
};

const string = "string string {{str1}} string {{str2}}";
console.log(patternMatch(string));
