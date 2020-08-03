/* Flat */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
let flattenedArray = matrix.flat(1);
console.log(flattenedArray);

/* Set */
const ary = [1, 2, 1, 2, 4, 3, 3, 5];
const set = new Set(ary);
console.log(set);

/* reduce */
flattenedArray = matrix.flat(1).reduce((a, v) => a + v, 0);
console.log(flattenedArray);

/*reduceRight */

const str = ["t", "s", "e", "b"];
let transformed = str.reduceRight((c, v) => c + v);
console.log(transformed);

/* from */

const func = function () {
  console.log(Array.from(arguments).join(""));
};

func("w", "h", "a", "t");

/*check if the first argument passed to a function is 2 or not */

const argumentsTest = (a) => {
  const foo = a === 2 ? true : false;
  console.log(foo);
};
argumentsTest(2);

function numberOperations(...args) {
  const result = args.reduce((acc, value) => acc + value, 0);
  console.log(result);
}

numberOperations([3, 1, 4, 5]);
