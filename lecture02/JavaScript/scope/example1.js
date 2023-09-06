// 블럭
{
    //
    const name = "Elena";
    console.log(name); //값: Elena
}

// console.log(name); //값: error 'name is defined'

// 밖에서 안으로

let age = 37;

{
    age++;
    console.log(age); //값: 38
}

console.log(age); //값: 38

// 중첩

{
    {
        {
            console.log(age);
        }
    }
}
