// 1 . Write a function named "makeTea" that takes one parameter, 'typeOfTea' , and returns
//  a string like "Making Green Tea" when called with "gree tea".
//  store the result in a variable named "teaOrder"

function makeTea(typeOfTea)
{
    return `Making a ${typeOfTea}`
}
let teaOrder = makeTea("Green Tea")
console.log(teaOrder)

//Create a function named "OrderTea" that takes one parameter, 'teaType' .
//  Inside this function , craete another function named "confirmOrder" that returns a message
//  like "Order confirmed for Chai".
// call "confirmOrder" within "OrderTea" and return the result.

function OrderTea(teaType)
{
    function confirmOrder()
    {
      return "Order confirmed for chai";
    }
    return confirmOrder ();
}
let orderTea = OrderTea("chai")
console.log(orderTea)

// Write an arrow function named 'calculateTotal' that takes two paramters : price and quantity .
// The function should return total cost by multiplying price and quantity 
// Store the result in a variable named totalCost

// const calculateTotal = (price, quantity) => 
//     {
//         return price*quantity
//     } 
// let totalCost = calculateTotal(150,7)
// console.log(totalCost)    

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100);
console.log(totalCost);
// Write a function name processTeaOrder that takes another functiion , "makeTea" as a parameter
//  and calls it with arguement "earlgrey".
// Return the result of calling makeTea
function makeTea(typeOfTea)
{
   return `the order places is ${typeOfTea}`
}
function processTeaOrder(teaFunction)
{

 return teaFunction("earl grey")
}
let order = processTeaOrder(makeTea)
console.log(order);

// Write a function name "createTeaMaker" that returns another function . the returned function takes
// another parameter , 'Teatype' and returns a message like "Making green Tea". 
// Store the returned function in a variable named 'teaMaker' and call it with green chai 

function createTeaMaker(name)
{
    return function(teaType)
    {
        return `Making ${teaType}  ${name}`;
    };
}
let teaMaker = createTeaMaker("Shreeya");
console.log(teaMaker("Green Tea"))