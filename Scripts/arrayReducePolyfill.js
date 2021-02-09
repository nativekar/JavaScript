Array.prototype.myReduce = function(fn, initial) {
    let values = this;

    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item
    })

    return initial;
}

const values = [2, 5, 5]
values.reduce((a, b) => a * b)  // 50
values.myReduce((a, b) => a * b)  // 50
