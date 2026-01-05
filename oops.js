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

//Encapsulation 
class BankAccount
{
    #balance = 0
    deposit(amount)
    {
       this.#balance += amount
       return this.#balance
    }

    getBalance()
    {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance());

// Abstraction 

class CoffeeMachine 
{
    start()
    {
        return `Starting the machine`
    }

    brewCoffee()
    {
        return `brewing a machine`
    }

    pressStartButton()
    {
       let msgOne = this.start();
       let msgTwo = this.brewCoffee()
       return `${msgOne} + ${msgTwo}`
    }
}
let machine = new  CoffeeMachine()
// console.log(machine.start())
// console.log(machine.brewCoffee());
console.log(machine.pressStartButton())

// Polymorphism - Having many forms 

class Bird {
    fly()
    {
        return `flying`
    }
}
 class Penguin extends Bird{
   fly()
   {
    return `Penguins can't fly`
   }
 }
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly())
console.log(penguin.fly()) 

// Static method 

class Calculator 
{
    static add(a,b)  // can be called only by class itself //No object can acces it 
    {
        return a + b;
    }
}

// let miniCal = new Calculator();
// console.log(miniCal.add(3,2))  // throws an error

console.log(Calculator.add(2,3))

// Getters and Setters 

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see the salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Slary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice" , 100000)
console.log(emp._salary);