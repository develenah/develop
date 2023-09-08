// static 상속

class Parent {
    static age = 30;
}

class Child extends Parent {}

console.log(Parent.age, Child.age); //값: 30 30
