function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise.all

(async function main() {
   const results = await Promise.all([p(1000), p(2000), p(3000)]);
   console.log(results); //값: [ 1000, 2000, 3000 ]
})();

// Promise.race

(async function main() {
    const result = await Promise.rece([p(1000), p(2000), p(3000)]);
    console.log(result); //값: 1000
 })();
