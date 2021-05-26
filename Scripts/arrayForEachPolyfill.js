if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

[1,2,3,4,5].forEach((i) => console.log(i));
