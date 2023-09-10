// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);
    return 'Elena: ' + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name); //값: Elena: 1000
    } catch (error) {
        console.log(error); //값:
    }
})();
