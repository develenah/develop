// 표준 내장 객체 : Array

const a = new Array('red', 'black', 'white');

console.log(a, typeof a); //값: [ 'red', 'black', 'white' ] 'object'
console.log(a instanceof Array); //값: true
console.log(a instanceof Object); //값: true

const b = new Array('red', 'green', 'yellow');

console.log(b, typeof b); //값: [ 'red', 'green', 'yellow' ] 'object'
console.log(b instanceof Array); //값: true
console.log(b instanceof Object); //값: true

console.log(b.slice(0, 1)); //값: [ 'red' ]
console.log(Array.prototype.slice, Object.prototype.slice); //값: [Function: slice] undefined
