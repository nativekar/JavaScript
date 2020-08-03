/* Currying translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). */

const multiply = (x, y) => {
  console.log(x * y);
};

/* setting x to always equal 3 */
const multiplyByX = multiply.bind(this, 3);
multiplyByX(3);

/* Using closures */

const divide = (x) => {
  return function (y) {
    console.log(x / y);
  };
};

const divideByX = divide(30);
divideByX(15);
