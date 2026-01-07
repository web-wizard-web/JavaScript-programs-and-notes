
// class Employee {
//   #salary;
//   constructor(name, salary) {
//     this.name = name;
//     this.#salary = salary;
//   }
//   get salary() {
//     return `You are not allowed to see the salary`;
//   }
//   set salary(value) {
//     if (value < 0) {
//       console.error("Invalid Slary");
//     } else {
//       this._salary = value;
//     }
//   }
// }
// let emp = new Employee("Alice" , 100000)
// console.log(emp._salary);