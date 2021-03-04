const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const tester = [10, 12, 13, 18, 122, 23, 17];

Array.prototype.myFilter = function(callBack) {
 let newArray = [];
 for (let i = 0; i < this.length; i++) {
  let result = callBack(this[i], i, this);
    if (result) {
     newArray.push(this[i]);
    }
}
 return newArray;
}

const result1 = tester.myFilter(test => test % 3 == 0);
const result = words.myFilter(word => word.length > 6);

console.log(result);
console.log(result1);
