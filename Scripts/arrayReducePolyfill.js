Array.prototype.myReduce = function(fn, initial) {
    let values = this;
    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item
    })
    return initial;
}

const values = [2, 5, 5]
console.log(values.reduce((a, b) => a * b, 1))  // 50
console.log(values.myReduce((a, b) => a * b, 1))  // 50
