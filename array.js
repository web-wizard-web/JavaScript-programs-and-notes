// Declare an array names 'teaFlavours' that contains the strings "green tea", "black tea" and "oolong tea".
//   Access the first element of the array and store it in a variable names 'firstTea'

teaFlavours = ["Green Tea" , "Black Tea" , "Oolong Tea"]
let firstTea = teaFlavours[0]
console.log(firstTea)

// Declare an array named "cities" containing "london", "Tokyo", "Paris", "New-York".
//    Access the third element of the array and store it in a variable names 'favoriteCity'

let cities = ["london" , "Tokyo" , "Paris" , "New-York"]
let favoriteCity = cities[2]

// You have an array named 'teaTypes' containing "herbal tea", "white tea" and "masala chai".
// Change the second element of the array to "jasmine tea"

let teaTypes = ["herbalTea" , "whiteTea" , "MasalaChai"]
teaTypes[1] = "jasmineTea"
console.log(teaTypes)

// Declare an array names 'CitiesVisited' containing 'Mumbai' and 'Sydney'.
// Add 'Berlin' to the array using push method.

let CitiesVisited = ["Mumbai" , "Sydney"]
CitiesVisited.push("Berlin")
console.log(CitiesVisited)

// You have an array named 'teaOrders' with "chai","iced tea","matcha" and "early gray".
// Remove the last element of the array using the 'pop' method and store it in the variable named 'last order' 
let teaOrders = ["chai" , "icedTea" , "matcha" , "earlyGray"]
let lastOrder = teaOrders.pop()
console.log(lastOrder)

// You have an array named 'PopularTeas' containing "green tea", "oolong tea" and "chai".
// Create a soft copy of this array names softCopyTeas

let PopularTeas = ["greenTea" , "OolongTea" , "chai"]
let softTeas = PopularTeas
console.log(PopularTeas)
console.log(softTeas)

// You have and array named topCities containing "Berlin" ,"Singapore" and "New-York".
// Create a hardcopy of this array named hardCopyCities.

let topCities = ["Berlin" , "Singapore" , "New-York"]
let hardCopyCities = [...topCities]

// let hardCopyCities = topCities.slice();
topCities.pop()
console.log(hardCopyCities)


// You have 2 arrays :'europianCities' containing "paris" and "rome" and 
// 'asianCities' containing "Tokyo" and "Bangkok"
// merge these array into a new array 'worldCities'
let europianCities = ["paris" , "rome"]
let asianCities = ["Tokyo" , "Bangkok"]
let worldCities = europianCities.concat(asianCities)
console.log(worldCities)
// You have an array names 'teaMenu' containing "masala chai","oolong tea","green tea" and "earl tea"
//Find the length of the array and store it in a variable 'menuLength'
 
teaMenu = ["masala chai" , "oolong tea" , "green tea" , "earl tea"]
menuLength = teaMenu.length;
console.log(menuLength);

//You have an array named 'cityBucketList' containing "kyoto","London","Cape town" and "Vancouver"
// Check if "London is in array and store the result in a variable named 'isLondonInList'

//  let cityBucketList = ["kyoto","London" , "Cape Town" , "Vancouver"]
//  let isLondonInList =(cityBucketList.includes("London"))
// console.log(isLondonInList)

 let cityBucketList = ["kyoto", "London", "Cape Town", "Vancouver"];
 let isLondonInList ;
 for(i=0;i<=cityBucketList.length;i++)
 {
 if(cityBucketList[i] == "London"){
   isLondonInList = cityBucketList[i];
 
}}
console.log(isLondonInList);