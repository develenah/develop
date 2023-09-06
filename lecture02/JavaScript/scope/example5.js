// 블록 스코프

var c =0;

{
    c++;
    console.log(c); //값: 1
}

{
    var d = 0;
    console.log(d); //값: 1
}

console.log(d); //값: 0 (함수 스코프가 아니기 때문에 가능)
