// Non-primitive values
// Objects, arrays, functions, ...

// Non-primitive (object) values store a reference (memory address)

// When comparing non-primitive (object) values with == or ===
// we are comparing the references (memory addresses)


const person1 = { name: "John", age: 30 };

const person2 = person1;   // -> Q1: What is being copied in here? The address



person2.name = "Mark";
console.log(person1.name); // -> Q2: What is the result?


person1.age = 21;
console.log(person2.age);  // -> Q3: What is the result?

person1.email = "example@example.com";
console.log(person2.email)