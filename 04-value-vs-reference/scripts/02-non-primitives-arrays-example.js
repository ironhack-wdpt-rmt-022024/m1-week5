// Non-primitive values
// Objects, arrays, functions, ...

// Non-primitive (object) values store a reference (memory address)

// When comparing non-primitive (object) values with == or ===
// we are comparing the references (memory addresses)


const myArr = []; // This creates an array in memory

// What does myArr variable hold?

/* 
 a) the actual value of the object 
 b) the memory adress, location of the array in memory (X)
*/

const newArr = myArr;

// What does the newArr variable hold?

newArr.push("hello");

console.log(newArr); //  ==> ?
console.log(myArr); //  ==> ?

console.log( newArr === myArr ); // ==> true

// Create a completely new array in memory
const x = ["hello"];

console.log( x === newArr ); // ==> false