// prototype 상속

function Person() {}

Person.prototype.hello = function() {
    console.log('hello'); //값: hello
};

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log('where', this.region); //값: where Seoul
    };
}

Korean.prototype = Person.prototype;

const b= new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean); //값: true
console.log(k instanceof Person); //값: true
console.log(k instanceof Object); //값: true
