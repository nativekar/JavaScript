// This algorithm doesn't use extra space and mutates the original array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  return arr;
};

function swap(arr, a, b) {
  let c;
  c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}
