const Person= {
    name: "Shreeya",
    greet() {
        console.log("Hello, my name is " + this.name) ;

    },

};

Person.greet();

const greetFunction = Person.greet;
greetFunction(); //undefined

// const boundGreetFunction = Person.greet.bind({name : "John"});
// boundGreetFunction();


const boundGreetFunction = Person.greet.bind(Person);
boundGreetFunction();

// call and apply methods

const anotherPerson = {
    name: "Alice"
};
Person.greet.call(anotherPerson); // Hello, my name is Alice

const student1 = {
  name: "Jack",
  introduction: function () {
    console.log(this.name + " studies.");
  },
};

const student2 = { name: "Jimmy" };

// Borrow introduction method from student1 for student2
let result = student1.introduction.bind(student2);
result(); // Output: Jimmy studies.


// apply method
