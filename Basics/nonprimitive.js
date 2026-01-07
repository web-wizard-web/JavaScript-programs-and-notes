let username= {
    firstname : "Shreeya" ,
    lastname:"Butkar" ,
     isLoggedin : true
    }
console.log(username);
console.log(typeof username);
console.log(username.firstname)

username.firstname= "Miss S"
console.log(username.firstname)
console.log(username['lastname'])

let today = new Date()
console.log(today.getHours())

// Array 

let heros = ["a" , "b" , "c" , true]
let anotherUser = ["Shreeya" , "Butkar" ,true]
console.log(anotherUser[0])

let isValue = "2"
console.log(Number(isValue))