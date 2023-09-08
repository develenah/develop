// constructor

class A {}

console.log(new A()); //값: A {}

class B {
    constructor() {
        console.log('constructor'); //값: constructor
    }
}

console.log(new B()); //값: B {}

class C {
    constructor(name, age) {
        console.log('constructor', name, age); //값: constructor Elena 30
    }
}

console.log(new C('Elena', 30)); //값: C {}
console.log(new C()); //값: constructor undefined undefined <br> C {}
