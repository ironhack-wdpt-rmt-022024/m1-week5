// Objects and arrays created using const are mutable (can be mutated),
// meaning we can add properties (or items) and methods to them
// However, const objects or arrays cannot be reassigned.

const obj = { age: 2, city: "Barcelona" };

obj.name = "Ironhacker";    // This is fine - we can mutate the array
delete obj.age;           // This is fine - we are still only mutating the object
// obj = { name: "Pretzel" }  // This will throw

console.log(obj);

const arr = [1, 2, 3];
arr.push(5);  // This is fine - we can mutate the array
arr.pop(); // This is fine - we are still mutating the array

// arr = []; // This will throw an error - we can't reassign the value