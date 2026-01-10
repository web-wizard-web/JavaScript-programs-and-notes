// asynchronus nature of js - having a pause in between
// such as during network requests, file reading, or timers
console.log("Start")

function sayHello()
{
    console.log("Say Hello")
}

setTimeout(() => {
    sayHello()
}, 4000); //2seconds

for (i = 0;i<= 10;i++)
{
    console.log(i)
}


// Event Loop 