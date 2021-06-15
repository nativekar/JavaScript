const search = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const arr = [78, 73, 83, 94, 78, 64, 9, 37, 40, 97, 40, 2].sort(
  (a, b) => a - b
);
const target = 78;
console.log(search(arr, target));
