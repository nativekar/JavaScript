/* This problem was asked as part of the LeetCode 30 Days May Challenge, and, of course, 
I didn't start in time to be able to submit this. 
This is how I'd solve it when asked in a product based company's interview (whenever that might be)*/

const firstBadVersion = (n, isBadVersion) => {
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/* Given I do not know how the badVersion number checks if a version is bad or not, 
I've taken the liberty to consider all even version numbers as bad. Odd, innit? */

const isBadVersion = (versionNumber) => {
  versionNumber % 2 === 0 ? true : false;
};

const n = 7;
console.log(firstBadVersion(n));
