// error 의 전파

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
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
        console.log(name); //값:
    } catch (error) {
        console.log(error); //값: Error: reason
    }
})();

