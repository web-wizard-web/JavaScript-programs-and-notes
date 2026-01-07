function Human(name)
{
    return `My name is ${name}`
}
console.log(Human("Shreeya")); // Normal Function Call

function Hello(language)
{
    this.language = language;
    if(this.language == "English")
    {
        return "Hello!"
    }
    else if(this.language == "Spanish")
    {
        return "Hola!"
    }
    else if(this.language == "French")
    {
        return "Bonjour!"
    }
    else if(this.language == "German")
            {
        return "Guten Tag!"
            }
    else if(this.language == "Italian")
            {
        return "Ciao!"
            }
    else {
        return "Language not supported"
    }                
} 
let greet1 = new Hello("English")
console.log(greet1);  // Constructor Function Call because use of 'new' keyword

class Student {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;

        this.introduce = function()
        {
            return `My name is ${this.name} and I am ${this.age} years old.`
    }
}
}
let student1 = new Student("Alice", 20)
console.log(student1.introduce()); // Class Constructor

