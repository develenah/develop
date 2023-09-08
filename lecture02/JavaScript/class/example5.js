// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name;
    }

    set name(value) {
        this._nmae = value + '!!!';
    }
}

const a = new A();
console.log(a); //값: A { _name: 'no name' }
a.name = 'Elena';
console.log(a); //값: A { _name: 'Elena!!!' } //set
console.log(a.name); //값: Elena!!!@@@ //get
console.log(a._name); //값: Elena!!!

// readoonly


class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b); //값: B { _name: 'no name' }
b.name = 'Elena';
console.log(b); //값: B { _name: 'no name' }
