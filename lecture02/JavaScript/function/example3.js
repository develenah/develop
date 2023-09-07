var hello2;
console.log(hello2);

hello1();
// hello2();
hello3();

function hello1() {
    console.log('hello1'); //값: hello1
}

hello2 = function() {
    console.log('hello2'); //값: hello2
};

const hello3 = function() {
    console.log('hello3'); //값: hello3 is not defined
};
