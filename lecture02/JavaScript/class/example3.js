// 멤버 변수

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Elena', 30)); //값: A { name: 'Elena', age: 30 }

// class field 는 런타임 확인

class B {
    name;
    age;
}

console.log(new B()); //값: B { name: undefined, age: undefined }

// runtime error
// runtime 바꾸기 
// terminal 에서 
// nvm use 12.11.1

class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Elena', 30)); //값: C { name: 'Elena', age: 30 }
