// Symbol

const a = Symbol();
const b = Symbol(37);
const c = Symbol('Elena');
const d = Symbol('Elena');

console.log(a, typeof a); //값: Symbol() 'symbol'
console.log(c === d); //값: false

new Symbol(); //값: error
