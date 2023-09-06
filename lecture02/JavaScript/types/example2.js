// Boolean

const inTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue); //값: true 'boolean'
console.log(isFalse, typeof isFalse); //값: false 'boolean'

const a = new Boolean(false);

console.log(a, typeof a); //값: [Boolean:false] 'object'

if(a) {
    console.log('false?'); //값: false?
}

const b = Boolean(false);

console.log(b, typeof b); //값: false 'boolean'

if (b) {
    console.log('false?'); //값이 안나옴
}
