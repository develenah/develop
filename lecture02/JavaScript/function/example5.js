global.a = 0;

{
    const a = 1;

    const test = new Function('return a');

    console.log(test()); //값: 0
}

{
    const a = 2;

    const test = function() {
        return a;
    }

    console.log(test()); //값: 2
}
