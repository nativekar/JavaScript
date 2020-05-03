/* This problem, too,  was asked as part of the LeetCode 30 Days May Challenge */

const jewelsAndStones = (S, J) => {
  let i,
    x,
    count = 0;
  for (i = 0; i < S.length; i++)
    for (x = 0; x < J.length; x++) {
      if (S.charAt(i) === J.charAt(x)) {
        count++;
        break;
      }
    }
  return count;
};

const S = "aAAabbbb";
const J = "aA";
console.log(jewelsAndStones(S, J));
