// //Write a for loop that loops through array and stops when it finds chai 

// let teaTypes = ["green tea", "herbal tea", "chai", "black tea"];
// let preferredTeas = [];
// for(let i=0;i <= teaTypes.length;i++){
//     preferredTeas.push(teaTypes[i]);
// if(teaTypes[i] == "chai")
// {
//     break;

// }
// }
// console.log(preferredTeas)

// // Write a for loop that loop through the array ["London", "Newyork" , "Paris", "Berlin"] and skips "Paris"

// let Cities = ["London" , "New York" , "Paris" , "berlin"]
// let selectedCities = []
// for(i = 0 ; i <= Cities.length ; i++)
// {
//     if(Cities == "Paris")
//     {
//         continue;
//         selectedCities.push(Cities[i]);
//     }
// }
// console.log(selectedCities)

// // Use a "for-of" loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found .
// //  store the number before 4 in the array called "smallnumbers"

// let numbers = [1,2,3,4,5];
// let smallnumbers = [];
// for (const n of numbers) {
//     if (n == 4)
//     {
//        break;
//     }
//     smallnumbers.push(n);
// }
// console.log(smallnumbers)

// Use a 'for-of ' loop to iterate through an array ["chai" , "green tea" ,"herbal tea" ,"black tea"] and skip 
// "herbal tea"

// let teatypes = ["chai" , "greenTea" , "herbal tea" , "blackTea"]
// let preferredTeas = [];
// for (const tea of teatypes) {
//     if(tea == "herbal tea")
//     {
//         continue;
    
//     }
//     preferredTeas.push(tea);
// }
// console.log(preferredTeas)


// Use an 'for-in loop to loop through the an object containing city population .'
// Stop the loop when the population of berlin is found and store the previous cities in a new object named 
// 'cityPopulations'

let cityPopulation ={
    "London" :8900000,
    "New-York" : 700000,
     "Paris" : 2200000,
     "Berlin" : 35000000
};
// acessing keys and values 
// console.log(Object.keys(cityPopulation))
// console.log(Object.values(cityPopulation))
// Object.freeze();
let cityNewPopulations = {};

for (const city in cityPopulation) {
    if(city == "Berlin")
    {
        break;
}
cityNewPopulations[city] = cityPopulation[city];
}
console.log(cityNewPopulations)

// use a 'for-in' loop to loop through an object called loop populations. 
// skip any city with a poplation below 3 million nad print the rest in a new object named largeCities
let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000,
};
let largeCities = {};
for (const city in worldCities) {
    if (worldCities[city] < 3000000)
    {
        continue;
    }
largeCities[city] = worldCities[city]
}
console.log(largeCities)



// Write a 'for-each' loop that iterates through a array ["earl grey","green tea", "chai" , "oolong tea"].
// stop the loop when "chai" is found , and store all previous tea types  in an array names 'availableTeas'

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []
teaCollection.forEach(function(tea){
if(tea == "chai")
{
    return;
}
availableTeas.push(tea);
});
console.log(availableTeas)

// "Write a 'for-each' loop that iterates through the array ["Berlin" ,"Tokyo" ,"Sydney" ,"Paris"].
// Skip "Sydney" and store the other cities in a new array named "travelledCities"

let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

myworldCities.forEach(city => {
    if(city == "Sydney")
    {
        return;
    }
    travelledCities.push(city);
});
console.log(travelledCities)

// Write a 'for' loop that iterates through an array [2,5,7,9].
// Skip the value 7 and multiply the rest b y 2 . store the results in a new array named 'doubledNumbers'

let numbers = [2,5,7,9]
let doubledNumbers = []
for(i=0;i<= numbers.length; i++)
{
    if(i == 7)
    {
        continue;
    }
    doubledNumbers.push(numbers[i]*2)
}
console.log(doubledNumbers)


// Write a 'for-of' loop to iterate through an array ["chai", "green tea" , "black tea" ,"jasmine tea", "herbal tea"]
// and stop  when the length of the current tea name is greater than 10 .
// Store the teas iterated over in an array named shortTeas



let myavailableTeas = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
 let shortTeas = [];

 for (const tea of myavailableTeas) {
 if (tea.length > 10)
    {
        break;
    }   
    shortTeas.push(tea)
 }
 console.log(shortTeas)

// for (let i=0;i < myavailableTeas.length; i++)
//  {
//     if(myavailableTeas[i].length >= 10)
//     {
//         continue;
//     }
//     shortTeas.push(myavailableTeas[i])
// }
// console.log(shortTeas)