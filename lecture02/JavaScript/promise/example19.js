/*
Promise.reject 르르 사용하면, catch 로 연결된 rejected 상태로변 경됩니다.
*/

Promise.reject(/* value */);

Promise.reject(new Error('reason'))
    .then(error => {})
    .catch(error => {
        console.log(error);
    });
