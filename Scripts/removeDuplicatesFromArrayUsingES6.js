const removeDuplicates = (array) =>{
  // 1: "Set"
  [...new Set(array)];

  // 2: "Filter"
  array.filter((item, index) => array.indexOf(item) === index);

  // 3: "Reduce"
  array.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    [],
  ); 
}

const array = [1, 1, 2, 3, 2, 3];

removeDuplicates(array);
