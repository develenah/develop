// new Function(/* 인자1,, 인자2, ... , 함수의 바디 */);

console.log(sum(1, 2, 3)); //값: sum is not defined

new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3)); //값: 6
