// if () {} else if () {} else {}

const n = 15;

if (n % 3 === 0) {
    console.log('n 은 3 의 배수 입니다.');
} else if (n % 5 === 0) {
    console.log('n 은 5 의 배수 입니다.');
} else {
    console.log('n 은 3  배수도 아니고, 5 의 배수도 아닙니다.');
}

// n 이 3 의 배수이면서, 5 의 배수이면

if (n % 3 === 0 && n % 5 === 0) {
    console.log('n 은 15 의 배수 입니다.');
} else if (n % 3 === 0) {
    console.log('n 은 3 의 배수 입니다.');
} else if (n % 5 === 0) {
    console.log('n 은 5 의 배수 입니다.');
} else {
    console.log('n 은 3  배수도 아니고, 5 의 배수도 아닙니다.');
}

// n % 3 === 0 과 n % 5 === 0 의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.

const multipleOfThree = (n % 3 === 0);
const multipleOfFive = (n % 5 === 0);

if (multipleOfThree && multipleOfFive) {
    console.log('n 은 15 의 배수 입니다.');
} else if (multipleOfThree) {
    console.log('n 은 3 의 배수 입니다.');
} else if (multipleOfFive) {
    console.log('n 은 5 의 배수 입니다.');
} else {
    console.log('n 은 3  배수도 아니고, 5 의 배수도 아닙니다.');
}

// 중첩을 이용해서 표현할 수도 있습니다.

if (multipleOfThree && multipleOfFive) {
    console.log('n 은 15 의 배수 입니다.');
} else {
    if (multipleOfThree) {
        console.log('n 은 3 의 배수 입니다.');
    } else if (multipleOfFive) {
        console.log('n 은 5 의 배수 입니다.');
    } else {
        console.log('n 은 3  배수도 아니고, 5 의 배수도 아닙니다.');
    }
}
