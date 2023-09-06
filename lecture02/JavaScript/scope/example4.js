// var 함수 스코프

var a = 0;

(function() {
    a++;
    console.log(a); //값: 1
})();

console.log(a); //값: 1

(function(){
    var b = a;
    console.log(b); //값: 0
})();

b++;
console.log(b); //값: error
