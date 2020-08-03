const merge = (arr, l, m, r) => {
  const size1 = m - l + 1;
  const size2 = r - m;
  let leftArray = [];
  let rightArray = [];
  // Copy left subarray
  for (let i = 0; i < size1; i++) {
    leftArray.push(arr[l + i]);
  }

  // Copy right subarray
  for (let j = 0; j < size2; j++) {
    rightArray.push(arr[m + 1 + j]);
  }

  // Initial indexes of left and right subarrays
  let i,
    j = 0;

  // Initial index of array
  let k = l;

  // Sort and Merge both subarrays
  while (i < size1 && j < size2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements
  while (i < size1) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < size2) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
  return arr;
};

const sort = (arr, l, r) => {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    sort(arr, l, m);
    sort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
};

let arr = [12, 11, 7, 9, 2, 3, 10];
sort(arr, 0, arr.length - 1);
console.log(arr);
