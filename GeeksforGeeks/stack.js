/* JavaScript offers Stack like functionality with its non-primitive datatype - an array, 
but an array cannot be used as a stack for it allows for insertion, deletion at any given position. 
This here is an attempt to build a stack by extending (or limiting) a JavaScript array.
*/

const createStack = (maxLength = 10) => {
  const _stack = [];
  let _top = -1;

  /* The basic building block - pushing an element into a stack */
  function push(val) {
    if (_top < maxLength - 1) {
      _stack.push(val);
      _top++;
    } else {
      return `Stack overflow`;
    }
  }

  /* What's pushed, shall eventually be popped */
  function pop(val) {
    if (_top < -1) {
      return `Stack underflow`;
    } else {
      _top--;
      return _stack.pop(val);
    }
  }

  /* return the length of the stack */
  function length() {
    return _top + 1;
  }

  /* A peak into that stack you will never use - this returns the current value of Top */
  function peek() {
    if (_top > -1) {
      return _stack[_top];
    } else {
      `No element in the stack`;
    }
  }

  /* What's pushed, may or may not be retrieved 
  - ideally, this function should return a boolean when the element is found 
  inside the stack  however, this can be changed to return the element that was found and null when it isn't */
  function search(val, returnType = "Boolean") {
    let found;
    returnType === "Boolean" ? (found = false) : (found = null);
    while (_top > -1) {
      if (_stack[_top] == val) {
        returnType === "Boolean" ? (found = true) : (found = _stack[_top]);
        break;
      } else _top--;
    }
    return found;
  }

  /* print the stack - for when you don't like a neat console */

  function print() {
    if (_top > -1) {
      return _stack.toString();
    } else return `No elements in the stack to print to console`;
  }

  /*  Empty the stack - for when you feel like it */
  function empty() {
    while (_top > -1) {
      _stack.pop();
      _top--;
    }
    return `Stack emptied`;
  }
  return { push, pop, length, peek, search, print, empty };
};

const testStack = createStack(15);
testStack.push(2);
testStack.push(21);
console.log(testStack.search(2));
testStack.empty();
