// prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    /*
    this.hello = function() {
        console.log('hello', this.name, this.age); //값: hello Elena 30
    };
    */
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age); //값: hello Elena 30
}

const p = new Person('Elena', 30);

p.hello();
console.log(p.toString()); //값: [object Object]

console.log(Person.prototype); //값: /* Person {} / Person { hello: [Function] }
console.log(Person.prototype.toString); //값: [Function: toString] 
console.log(Person.prototype.constructor); //값: [Function: Person] 
console.log(Person.prototype.hello); //값: undefined /* [Function]

console.log(Object.prototype); //값: {}
console.log(Object.prototype.toString); //값: [Function: toString] 
console.log(Object.prototype.constructor); //값: [Function: Object] 

console.log(p instanceof Person); //값: true
console.log(p instanceof Object); //값: true
