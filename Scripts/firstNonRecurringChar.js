const firstNonRecurringChar = S => {
  let iterator;
  for (iterator = 0; iterator < S.length; iterator++) {
    const c = S.charAt(iterator);
    if (S.indexOf(c) === iterator && S.indexOf(c, iterator + 1) === -1) {
      return c;
    }
  }
  return -1;
};

const S = "abcdeabcd";
console.log(firstNonRecurringChar(S));
