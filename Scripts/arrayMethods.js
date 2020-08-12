/* Flat */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
let flattenedArray = matrix.flat(1);
console.log(flattenedArray);
/* end of function */

/* Set */
const ary = [1, 2, 1, 2, 4, 3, 3, 5];
const set = new Set(ary);
console.log(set);
/* end of function */

/* reduce */
flattenedArray = matrix.flat(1).reduce((a, v) => a + v, 0);
console.log(flattenedArray);
/* end of function */

/*reduceRight */
const str = ["t", "s", "e", "b"];
let transformed = str.reduceRight((c, v) => c + v);
console.log(transformed);
/* end of function */

/* from */
const func = function () {
  console.log(Array.from(arguments).join(""));
};
func("w", "h", "a", "t");
/* end of function */

/*check if the first argument passed to a function is 2 or not */
function argumentsTest() {
  const foo = arguments[0] === 2 ? true : false;
  console.log(foo);
}
argumentsTest(2);
/* end of function */

function numberOperations(...args) {
  const result = args.reduce((acc, value) => acc + value, 0);
  console.log(result);
}
numberOperations([3, 1, 4, 5]);
/* end of function */

/* Using the functional paradigm */
const person = {
  name: "Jimmy Pears",
  age: "40",
  email: "jimmy@xyz.com",
  cell: "123456789",
};

const careerData = {
  title: "Software Dev",
  company: "ABC",
};

const personWithCareerData = { ...person, ...careerData };
personWithCareerData;

const updates = {
  name: "Dean Smith",
};

const updatedPerson = {
  ...person,
  ...updates,
};

updatedPerson;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tripled = (x) => x * 3;

const tripledArr = arr.map(tripled);

tripledArr;

const isEven = (x) => x % 2 == 0;

const evenNumbers = arr.filter(isEven);

evenNumbers;

const words = ["hello", "here", "hare", "heir", "California"];

const isLonger = (length) => (word) => word.length > length;

const longWords = words.filter(isLonger(5));

longWords;

const employees = [
  {
    name: "John Doe",
    salary: 1100000,
  },
  {
    name: "Jane Doe",
    salary: 6075000,
  },
  {
    name: "Jill Doe",
    salary: 105000,
  },
  {
    name: "Jake Doe",
    salary: 450000,
  },
];

const makesAMillion = (employee) => employee.salary > 1000000;

const employeesMakingAMillion = employees.some(makesAMillion);

employeesMakingAMillion;

const formValues = ["Mike", "Spectre", "24", ""];

const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

allFieldsFilled;

const subSet = arr.slice().reverse();

subSet;

const mixedUpNumbers = [10, 4, 6, 8, 9, 2, 3, 5, 7, 1];

const ascending = (a, b) => a - b;

const descending = (a, b) => b - a;

const sortedArr = mixedUpNumbers.slice().sort(ascending);

sortedArr;

const numberArr = [10, 20, 30, 40, 50, 60];

const sum = numberArr.reduce((acc, element) => {
  return acc + element;
}, 0);

sum;
