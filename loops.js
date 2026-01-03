// Write a program that calculates the sum of all numbers from 1 to 5
// let i = 1
// let sum = 0
// while(i < 6){
//     sum += i
//     i++
// }
// console.log("Sum is" ,sum)

// Write a while loop that counts down from 5 to 1 and stores in any array '"countdown"
let countdown = [];
i = 5 ;
while(i > 0){
    countdown.push(i);
    i--;
}
console.log(countdown);

// Write a 'do while' loop that prompts the user to enter their favourite tea type until they enter "stop" .
// Store each tea type in an array teaCollection 
// let teaCollection = [];
// let tea ; 
// do {
// tea = prompt("Enter Favourite tea");
// if (tea != "stop") {
// teaCollection.push(tea);
// }
// }
// while(tea != "stop")
// {
//  console.log(teaCollection);
// }

// Write a 'do while ' loop that adds number from 1 to 3 and stores them in a variable namede result
let total = 0
let index= 1
do {
    total += 1
    index++
}
while(index<=3)
{
    console.log(total)
}

// Write a 'for' loop that multiplies each element  in the array [2,4,6] by 2 and stores the rsults in a new 
// array named "multipliedNumbers"

let array = [2,4,6]
let newarray = [];
for (i=0;i<= array.length ; i++)
{
    newarray.push(array[i]*2)
}
console.log(newarray)

// Write a 'for' loop that lists all the cities in the array '["Paris" , "New York" ,"Tokyo" ,"London"] and 
// stores each city  in a new array names 'cityList'

let cities = ["Paris" , "New York" , "Tokyo" , "London"]
let newCities = [];
for (i=0 ; i<= array.length ; i++)
{
    let arr = cities[i]
     newCities.push(arr)
}
console.log(newCities)