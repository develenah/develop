/*
executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
    //
    // ...
    resolve(); //fulfilled
})
