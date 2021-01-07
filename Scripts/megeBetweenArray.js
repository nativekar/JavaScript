const megeBetweenArray = (arr1, arr2, a, b) => {
arr1.splice(a, b, arr2);
return arr1.flat();
}

const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8];
let a = 1, b = 3;
console.log(megeBetweenArray (arr1, arr2, a, b));
