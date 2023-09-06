// 5 와 10 을 더해서,
// sum 이라는 이름의 상수에 보관한 뒤,
// 3 으로 나누어 나머지가 0 이면, '야호3' 를 출력하고,
// 5 로 나누어 나머지가 0 이면, '야호5' 를 출력합니다.
// result 라는 변수는 3 으로 나누어 떨어지거나, 5 로 나누어 떨어지면 true 라는 값을 가지고,
// 아니면 false 라는 값을 가진다.

const sum = 5 + 10;
let result = false;

if (sum % 3 === 0) {
    console.log('야호3');
    result = true;
}

if (sum % 5 === 0) {
    console.log('야호5');
    result = true;
}

console.log(result);
