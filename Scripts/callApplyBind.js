const name = {
  firstName: "some",
  lastName: "body",
};

const name2 = {
  firstName: "another some",
  lastName: "body",
};

const printFullName = function (place, location) {
  console.log(
    `${this.firstName} ${this.lastName} from ${place} in ${location}`
  );
};

/* Call - Apply - Bind */
printFullName.call(name, "nowhere");
printFullName.apply(name2, ["somewhere"]);
const printName = printFullName.bind(name, "nowhere");
printName("India");

/* Polyfill for Bind */

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printName2 = printFullName.myBind(name2, "here");
printName2("India");
