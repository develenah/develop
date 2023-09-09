/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.raec 를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.
*/

// Promise.all([프로미스 객체들]);

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then(messages => {
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', messages); //값: 가장 빠른 하나가 fulfilled 된 이후에 실행됩니다. 1000
})
