// 생성자 함수

function A() {}

const a = new A();
console.log(a, typeof a); //값: A {} 'object'
console.log(A()); //값: undefined

// 생성하면서 데이터 넣기

function B(name, age) {
    console.log(name, age); //값: undefined undefined
}

const b = new B(); //값: Elena 30
const c = new B('Elena', 30); //값: undefined undefined
console.log(B()); //undefined
