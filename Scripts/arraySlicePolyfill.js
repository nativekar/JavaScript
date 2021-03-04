Array.prototype.mySlice = function (si, ei) {
	const newArray = [];
  for (let i = si; i < ei; i++) {
  	newArray.push(this[i])
  }
  return newArray;
}

const arr = [1, 3, 4, 6, 7, 8];

console.log(arr.mySlice(2, 4)) // [4, 6]
