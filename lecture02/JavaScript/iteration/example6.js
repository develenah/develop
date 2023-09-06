// for of

for (const i of [1, 2, 3]) {
    console.log(i); //값: 1 / 2 / 3
}

// for in

Object.prototype.test = function() {};

for (const i in { a: 1, b: 2, c: 3}) {
    console.log(i); //값: a / b / c / test
}
