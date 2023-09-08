// 멤버 함수

class A {
    hello1() {
        console.log('hello1', this); //값: hello1 A { hello2: [Function: hello2] }
    }

    hello2 = () => {
        console.log('hello2', this); //값: hello2 A { hello2: [Function: hello2] }
    }
}

new A().hello1();
new B().hello2();

class B {
    name = 'Elena';

    hello() {
        console.log('hello', this.name) //값: hello Elena
    }
}

new B().hello();
