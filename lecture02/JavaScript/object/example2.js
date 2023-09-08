// 값을 속성으로 넣기

function A() {
    this.name = 'Elena';
}

const a = new A(); // {name: 'Elena}
console.log(a); //값: A { name: 'Elena }

// 함수를 속성으로 넣기

function B() {
    this.hello = function() {
        console.log('hello'); //값: hello
    };
}

new B().hello();

// new Function()
