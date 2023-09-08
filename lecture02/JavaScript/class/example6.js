// static 변수, 함수

class A {
    static age = 30;
    static hello() {
        console.log(A.age); //값: [Function: A] { age: 30 } 30
    }
}

console.log(A, A.age); //값: 30
A.hello();

class B {
    age = 29;
    static hello() {
        console.log(this.age); //값: [Function: B] undefined
    }
}

console.log(B, B.age); //값: undefined
B.hello();
new B().hello();

class C {
    age = 29;
    static name = '이 클래스의 이름은 C가 아니다.'
}

console.log(C); //값: [Function: 이 클래스의 이름은 C가 아니다.] { name: '이 클래스의 이름은 C가 아니다.' }
