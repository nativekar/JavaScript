const zerosAndOnes = (arr) => {
const sorted = arr.sort((a,b) => a - b);
return sorted;
}

const arr = [1,0,0,0,1,0,1,0,0,1,1,0];
console.log(zerosAndOnes(arr));
