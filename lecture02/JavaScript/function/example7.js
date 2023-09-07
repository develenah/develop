// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age) {
    console.log(this); //값: Person {}
    this.name = name;
    this.age = age;
}

const p = new Person('Elena', '30');

console.log(p, p.name, p.age); //값: Person { name: 'Elena', age: 30 } 'Elena' 30

const a = new Person('Hera', '26');

console.log(a, a.name, a.age); //값: Person { name: 'Hera', age: 26 } 'Hera' 26

const Dog = (name, age) => {
    console.log(this); //값: Dog is not a constructor
    this.name = name;
    this.age = age;
}

const c = new Dog('은탄', 3);
