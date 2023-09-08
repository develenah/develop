// super

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    hello () {
        console.log('hello', this.name, this.age); 
    }
}

const p = new Parent('Elena');
const c = new Child('Elena', 29);

console.log(p, c); //값: Parent { name: 'Elena' } Child { name: 'Elena', age: 29 } <br> hello Elena 29
c.hello();
