// 상속 기본

class Parent {
    name = 'Shin';

    hello() {
        console.log('hello', this.name); 
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c); //값: Parent { name: 'Shin' } Child { name: 'Shin' } <br> hello Shin <br> hello Elena

c.hello();
c.name = 'Elena';
c.hello();
