if(!Array.prototype.map){
   Array.prototype.map = function(fn) {
    const rv = [];    
    for(let i=0, l=this.length; i<l; i++)
      rv.push(fn(this[i]));
    return rv;
   }
  };

/* or */

if(!Array.prototype.map){
Array.prototype.map = function(cb) {
    let newArray = [];
    for(let item of this) {
        newArray.push(cb(item));
    }
    return newArray;
  }
};
