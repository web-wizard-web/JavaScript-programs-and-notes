let Car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start : function()
    {
        return `${this.make} was made in the ${this.year}`
    }
}
console.log(Car.start())

function Person(name , age)
{
this.name = name ;
this.age = age;
}

let john = new Person("John Doe" , 21)
console.log(john)

function Animal (type)
{
this.type = type;
}
Animal.prototype.speak = function (stype)
{
    return `${this.type} makes a ${stype} sound` 
}

let dog = new Animal("Dog")
let bark = dog.speak("Bark")  // Since speak is defined on the prototype, dog can access it
console.log(dog)
console.log(bark)

Array.prototype.Shreeya = function()
{
    return `Custom methid ${this}`
}

let myArray = [1,2,3,4,5]
console.log(myArray.Shreeya())
let myNewArray = [1, 2, 3, 4, 5 ,6 ,7];
console.log(myNewArray.Shreeya());


// Classes and Inheritance
class Vehicle
{
    constructor(make,model)
    {
        this.make = make;
        this.model = model 
    }
    start()
    {
        return `${this.model} is a car from ${this.make}`
    }
}
class Car1 extends Vehicle{
    drive()
    {
        return `${this.make} is an inheritance example`
    }
}
let myCar = new Car1("Toyota" , "Corolla");
console.log(myCar.start())
console.log(myCar.drive())

let vehOne = new Vehicle("Ford" , "Mustang")
console.log(vehOne.make);

