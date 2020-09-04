const balancedParentheses = (exp) => {
  const _stack = [];
  const length = exp.length;

  for (let x = 0; x < length; x++) {
    const char = exp.charAt(x);
    if (char === "(" || char === "{" || char === "[") {
      _stack.push(char);
      continue;
    }

    switch (char) {
      case ")":
        _stack.pop();
        if (char == "{" || char == "[") return false;
        break;
      case "}":
        _stack.pop();
        if (char == "(" || char == "[") return false;
        break;
      case "]":
        _stack.pop();
        if (char == "{" || char == "(") return false;
        break;
    }
  }

  if (_stack.length === 0) {
    return true;
  } else return false;
};

const exp = "({)";
if (balancedParentheses(exp)) console.log(`Balanced`);
else console.log(`Not balanced`);
