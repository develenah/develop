// 함수를 인자로 하여 함수를 호출

function hello(c) {
    console.log('hello'); //값: hello
    c();
}

hello(function() {
    console.log('콜백'); //값: 콜백
}); 
