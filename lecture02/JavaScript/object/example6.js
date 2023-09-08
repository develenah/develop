// 객체 리터럴

const a = {};

console.log(a, typeof a); //값: {} 'object'

const b= {
    name: 'Elena';
};

console.log(b, typeof b); //값: {name: 'Elena' } 'object'

const c= {
    name: 'Elena',
    hello1() {
        console.log('hello1', this.name); //값: hello1 Elena
    },
    hello2: function() {
        console.log('hello2', this.name); //값: hello1 Elena
    },
    hello3: () => {
        console.log('hello3', this.name); //값: hello1 undefined
    }
};

c.hello1();
c.hello2();
c.hello3();
