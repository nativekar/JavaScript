const stripProperty = (obj, prop) => {
  let newObj = {};
  for (const property in obj) {
    if (property !== prop) {
      newObj = obj;
    } else if (prop && property === prop) {
      delete obj[property];
      newObj = obj;
    }
  }
  return newObj;
};

const object = {
  foo: 3,
  bar: 2,
  baz: 4,
};
const prop = "fizz";
console.log(stripProperty(object, prop));
