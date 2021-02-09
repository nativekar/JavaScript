if(!Array.prototype.map){
   Array.prototype.map = function(fn) {
    const rv = [];    
    for(let i=0, l=this.length; i<l; i++)
      rv.push(fn(this[i]));
    return rv;
   }
  };
