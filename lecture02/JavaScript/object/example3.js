// newn Object

const a = new Object();

console.log(a, typeof a); //값: {} 'object'

const b = new Object(true);

console.log(b, typeof b); //값: [Boolean: true] 'object'

const c = new Object({name : 'Elena'});

console.log(c, typeof c); //값: { name: 'Elena'} 'object'
