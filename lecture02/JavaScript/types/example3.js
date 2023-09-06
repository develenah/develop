// Null

const a = null;

console.log(a, typeof a); //값: null 'object'

// Undefined

let b;

console.log(b, typeof b); //값: undefined 'undefined'

b = undefined;

console.log(b, typeof b); //값: undefined 'undefined'

if (a == b) {
    console.log(a == b);
} //값: true

if (a === b) { //정확하게 비교하기 의해
    console.log(a === b);
}
