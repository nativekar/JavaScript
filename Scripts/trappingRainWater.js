const trap = (height) => {
  if (height.length < 2) return 0;
  const len = height.length;
  const fromLeft = new Array(len),
    fromRight = new Array(len);
  fromLeft.fill(0);
  fromRight.fill(0);
  for (let i = 0, maxSeen = 0; i < len - 1; i++) {
    if (height[i] > maxSeen) maxSeen = height[i];
    fromLeft[i + 1] = maxSeen;
  }
  for (let i = len - 1, maxSeen = 0; i >= 0; i--) {
    if (height[i] > maxSeen) maxSeen = height[i];
    fromRight[i - 1] = maxSeen;
  }
  //traverse the height , calculate running total for each bar
  let total = 0;
  for (let i = 0; i < len; i++) {
    let diff = Math.min(fromLeft[i], fromRight[i]);
    total += diff - height[i] < 0 ? 0 : diff - height[i];
  }
  return total;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

/* Two pointer approach begins */
const trap2 = (height) => {
  let l = 0;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;
  let r = height.length - 1;
  while (l < r) {
    if (height[l] < height[r]) {
      leftMax = Math.max(leftMax, height[l]);
      result += leftMax - height[l] > 0 ? leftMax - height[l] : 0;
      l += 1;
    } else {
      rightMax = Math.max(rightMax, height[r]);
      result += rightMax - height[r] > 0 ? rightMax - height[r] : 0;
      r -= 1;
    }
  }
  return result;
};

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
/* Two pointer approach ends */
