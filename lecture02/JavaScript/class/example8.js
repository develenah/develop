// 변수, 함수 추가 및 오버라이딩

class Parent {
    name = 'Shin';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 29;

    hello () {
        console.log('hello', this.name, this.age); 
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c); //값: Parent { name: 'Shin' } Child { name: 'Shin', age: 29 } <br> hello Shin 29 <br> hello Elena 29
c.hello();
c.name = 'Elena';
c.hello();
